// ✅ src/components/ReservaList.tsx
'use client';

import { Reserva, Dentist } from '@/models/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Trash2 } from 'lucide-react';

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
        <Card key={reserva.id} className="p-4 space-y-1">
          <h3 className="font-bold text-lg text-blue-700">{reserva.nombrePaciente}</h3>
          <p>📅 {reserva.fecha} 🕑 {reserva.horario}</p>
          <p>✉️ {reserva.correo}</p>
          <p>📝 {reserva.motivo}</p>
          <p className="text-sm text-gray-600">
            Estado: <strong>{reserva.estado}</strong>
          </p>

          {reserva.estado === 'pendiente' && (
            <div className="flex flex-wrap gap-2 mt-2">
              <Button onClick={() => cambiarEstado(reserva.id, 'confirmada')}>
                <Check className="mr-2 h-4 w-4" /> Confirmar
              </Button>
              <Button onClick={() => cambiarEstado(reserva.id, 'cancelada')} variant="destructive">
                <X className="mr-2 h-4 w-4" /> Cancelar
              </Button>
              <Button onClick={() => eliminarReserva(reserva.id)} variant="secondary">
                <Trash2 className="mr-2 h-4 w-4" /> Eliminar
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}