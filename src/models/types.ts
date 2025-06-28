// src/models/types.ts

export interface Dentist {
  id: string;
  nombre: string;
  especialidad: string;
  correo: string;
  fotoUrl?: string;
}

export interface Reserva {
  id: string;
  nombrePaciente: string;
  correo: string;
  motivo: string;
  fecha: string; // ISO date (ej: 2025-06-30)
  horario: string; // ej: '10:00'
  odontologoId: string;
  estado: 'pendiente' | 'confirmada' | 'cancelada';
}
