'use client';

import { useEffect, useState } from 'react';
import { Dentist, Reserva } from '@/models/types';
import ReservaList from '@/components/ReservaList';
import CalendarioReservas from '@/components/CalendarioReservas';

export default function DashboardPage() {
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [odontologoId, setOdontologoId] = useState<string>('');

  useEffect(() => {
    fetch('/data/dentists.json').then(res => res.json()).then(setDentists);
    fetch('/api/reservas').then(res => res.json()).then(setReservas);
  }, []);

  const odontologoSeleccionado = dentists.find(d => d.id === odontologoId);
  const reservasFiltradas = reservas.filter(r => r.odontologoId === odontologoId);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard de Odontólogos</h1>

      <select
        className="w-full border p-2 rounded"
        value={odontologoId}
        onChange={(e) => setOdontologoId(e.target.value)}
      >
        <option value="">Selecciona un odontólogo</option>
        {dentists.map(d => (
          <option key={d.id} value={d.id}>
            {d.nombre} – {d.especialidad}
          </option>
        ))}
      </select>

      {odontologoSeleccionado && (
        <>
          <ReservaList reservas={reservas} odontologo={odontologoSeleccionado} />
          <CalendarioReservas reservas={reservasFiltradas} />
        </>
      )}
    </main>
  );
}
