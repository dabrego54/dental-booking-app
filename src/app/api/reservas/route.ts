// ✅ src/app/api/reservas/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Reserva } from '@/models/types';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'reservas.json');

export async function GET() {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
    const reservas: Reserva[] = JSON.parse(data);
    return NextResponse.json(reservas);
  } catch (error) {
    return NextResponse.json({ error: 'Error al leer reservas' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const nuevaReserva: Reserva = {
      ...body,
      id: body.id ?? crypto.randomUUID(),
      estado: 'pendiente',
    };

    const data = await fs.readFile(DATA_PATH, 'utf-8');
    const reservas: Reserva[] = JSON.parse(data);

    reservas.push(nuevaReserva);

    await fs.writeFile(DATA_PATH, JSON.stringify(reservas, null, 2));

    return NextResponse.json({ message: 'Reserva guardada correctamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar la reserva' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, nuevoEstado } = await req.json();

    const data = await fs.readFile(DATA_PATH, 'utf-8');
    const reservas: Reserva[] = JSON.parse(data);

    const index = reservas.findIndex(r => r.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Reserva no encontrada' }, { status: 404 });
    }

    reservas[index].estado = nuevoEstado;
    await fs.writeFile(DATA_PATH, JSON.stringify(reservas, null, 2));

    return NextResponse.json({ message: 'Estado actualizado correctamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar reserva' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const data = await fs.readFile(DATA_PATH, 'utf-8');
    let reservas: Reserva[] = JSON.parse(data);

    const nuevaLista = reservas.filter(r => r.id !== id);

    if (nuevaLista.length === reservas.length) {
      return NextResponse.json({ error: 'Reserva no encontrada' }, { status: 404 });
    }

    await fs.writeFile(DATA_PATH, JSON.stringify(nuevaLista, null, 2));

    return NextResponse.json({ message: 'Reserva eliminada correctamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar reserva' }, { status: 500 });
  }
}
