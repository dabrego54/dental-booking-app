// ✅ src/components/ReservaList.tsx
'use client';

import { Reserva, Dentist } from '@/models/types';

interface Props {
  reservas: Reserva[];
  odontologo: Dentist | undefined;
}

export default function ReservaList({ reservas, odontologo }: Props) {
  if (!odontologo) return null;

  const reservasFiltradas = reservas.filter(r => r.odontologoId === odontologo.id);

  const cambiarEstado = async (id: string, nuevoEstado: Reserva['estado']) => {
    const res = await fetch('/api/reservas', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, nuevoEstado }),
    });

    if (res.ok) {
      location.reload();
    } else {
      alert('Error al actualizar estado');
    }
  };

  const eliminarReserva = async (id: string) => {
    const confirmar = confirm('¿Estás seguro de eliminar esta reserva?');
    if (!confirmar) return;

    const res = await fetch('/api/reservas', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      location.reload();
    } else {
      alert('Error al eliminar la reserva');
    }
  };

  if (reservasFiltradas.length === 0) {
    return <p className="mt-4 text-gray-500">No hay reservas para {odontologo.nombre}.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {reservasFiltradas.map((reserva) => (
        <div key={reserva.id} className="border rounded p-4 bg-white shadow space-y-1">
          <h3 className="font-bold">{reserva.nombrePaciente}</h3>
          <p>📅 {reserva.fecha} 🕑 {reserva.horario}</p>
          <p>✉️ {reserva.correo}</p>
          <p>📝 {reserva.motivo}</p>
          <p className="text-sm text-gray-600">Estado: <strong>{reserva.estado}</strong></p>

          {reserva.estado === 'pendiente' && (
            <div className="flex gap-2 mt-2">
              <button onClick={() => cambiarEstado(reserva.id, 'confirmada')} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                Confirmar
              </button>
              <button onClick={() => cambiarEstado(reserva.id, 'cancelada')} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                Cancelar
              </button>
              <button onClick={() => eliminarReserva(reserva.id)} className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
                Eliminar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}