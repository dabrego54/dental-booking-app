"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function ReservaForm() {
  const { data: session, status } = useSession();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [odontologo, setOdontologo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      alert("Debes iniciar sesión con Google para agendar una cita.");
      return;
    }

    const formData = {
      nombre,
      correo,
      motivo,
      fecha,
      hora,
      odontologo,
    };

    try {
      const res = await fetch("/api/reservar-cita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Respuesta inesperada del servidor:", text);
        throw new Error("Respuesta inesperada del servidor");
      }

      if (res.ok) {
        alert("✅ Cita agendada correctamente en Google Calendar.");
        setNombre("");
        setCorreo("");
        setMotivo("");
        setFecha("");
        setHora("");
        setOdontologo("");
      } else {
        alert("❌ Error al agendar cita: " + (data?.message || "Error desconocido"));
        console.error("Detalles del error:", data);
      }
    } catch (error) {
      console.error("❌ Error de red:", error);
      alert("❌ No se pudo conectar con el servidor");
    }
  };

  if (status === "loading") return <p>Cargando...</p>;

  if (!session) {
    return (
      <p className="text-red-600">
        Por favor <strong>inicia sesión</strong> con Google para agendar una cita.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre del paciente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <textarea
        placeholder="Motivo de consulta"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <select
        value={odontologo}
        onChange={(e) => setOdontologo(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      >
        <option value="">Seleccionar odontólogo</option>
        <option value="Dr. Pérez">Dr. Pérez</option>
        <option value="Dra. Ramírez">Dra. Ramírez</option>
        <option value="Dr. Soto">Dr. Soto</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Reservar cita
      </button>
    </form>
  );
}
