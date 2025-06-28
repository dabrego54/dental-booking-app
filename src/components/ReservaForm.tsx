'use client';

import { useState, useEffect } from 'react';
import { Reserva, Dentist } from '@/models/types';

export default function ReservaForm() {
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [form, setForm] = useState({
    nombrePaciente: '',
    correo: '',
    motivo: '',
    fecha: '',
    horario: '',
    odontologoId: '',
  });

  useEffect(() => {
    fetch('/data/dentists.json')
      .then((res) => res.json())
      .then((data) => setDentists(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevaReserva: Reserva = {
      ...form,
      id: crypto.randomUUID(),
      estado: 'pendiente',
    };

    const res = await fetch('/api/reservas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaReserva),
    });

    if (res.ok) {
      alert('Reserva creada correctamente 🎉');
      setForm({
        nombrePaciente: '',
        correo: '',
        motivo: '',
        fecha: '',
        horario: '',
        odontologoId: '',
      });
    } else {
      alert('Error al crear la reserva ❌');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">Agendar Cita</h2>

      <input name="nombrePaciente" type="text" placeholder="Nombre del paciente" required className="w-full p-2 border rounded" value={form.nombrePaciente} onChange={handleChange} />
      <input name="correo" type="email" placeholder="Correo electrónico" required className="w-full p-2 border rounded" value={form.correo} onChange={handleChange} />
      <textarea name="motivo" placeholder="Motivo de consulta" required className="w-full p-2 border rounded" value={form.motivo} onChange={handleChange} />

      <input name="fecha" type="date" required className="w-full p-2 border rounded" value={form.fecha} onChange={handleChange} />
      <input name="horario" type="time" required className="w-full p-2 border rounded" value={form.horario} onChange={handleChange} />

      <select name="odontologoId" required className="w-full p-2 border rounded" value={form.odontologoId} onChange={handleChange}>
        <option value="">Seleccionar odontólogo</option>
        {dentists.map((d) => (
          <option key={d.id} value={d.id}>
            {d.nombre} – {d.especialidad}
          </option>
        ))}
      </select>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Reservar cita
      </button>
    </form>
  );
}
