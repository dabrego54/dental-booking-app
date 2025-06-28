
// ✅ src/components/CalendarioReservas.tsx
'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Reserva } from '@/models/types';
import { Card } from '@/components/ui/card';

interface Props {
  reservas: Reserva[];
}

export default function CalendarioReservas({ reservas }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const fechasOcupadas = reservas.map(r => new Date(r.fecha));

  const reservasDelDia = selectedDate
    ? reservas.filter(r => r.fecha === format(selectedDate, 'yyyy-MM-dd'))
    : [];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Calendario de Reservas</h2>
      <div className="bg-white p-4 rounded shadow">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{ reservas: fechasOcupadas }}
          modifiersClassNames={{ reservas: 'bg-blue-200 rounded-full' }}
        />
      </div>

      {selectedDate && (
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-semibold">
            Reservas para el {format(selectedDate, 'dd/MM/yyyy')}
          </h3>
          {reservasDelDia.length === 0 ? (
            <p className="text-gray-500">Sin reservas este día.</p>
          ) : (
            reservasDelDia.map((reserva) => (
              <Card key={reserva.id} className="p-3 bg-gray-50">
                <p>
                  <strong>{reserva.nombrePaciente}</strong> a las {reserva.horario}
                </p>
                <p>{reserva.motivo}</p>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
}
