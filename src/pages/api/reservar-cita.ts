// src/pages/api/reservar-cita.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const GOOGLE_CALENDAR_API = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Método no permitido');

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token || !token.accessToken) {
    console.error("No access token encontrado");
    return res.status(401).json({ message: 'No autenticado' });
  }

  const { nombre, correo, motivo, fecha, hora, odontologo } = req.body;

  const event = {
    summary: `Cita Dental - ${nombre}`,
    description: `Motivo: ${motivo}\nOdontólogo: ${odontologo}`,
    start: {
      dateTime: new Date(`${fecha}T${hora}`).toISOString(),
      timeZone: 'America/Santiago',
    },
    end: {
      dateTime: new Date(new Date(`${fecha}T${hora}`).getTime() + 30 * 60 * 1000).toISOString(), // 30 min
      timeZone: 'America/Santiago',
    },
    attendees: [{ email: correo }],
  };

  try {
    const response = await fetch(GOOGLE_CALENDAR_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Error desde Google Calendar API:", responseData);
      return res.status(500).json({ message: 'Error al crear evento', error: responseData });
    }

    return res.status(200).json({ message: 'Cita agendada en Google Calendar', eventData: responseData });
  } catch (err: any) {
    console.error("Excepción inesperada:", err);
    return res.status(500).json({ message: 'Error inesperado en el servidor', error: err.message });
  }
}
