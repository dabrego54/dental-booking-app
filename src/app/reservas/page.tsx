"use client";

import { SessionProvider } from "next-auth/react";
import AuthStatus from "@/components/AuthStatus";
import ReservaForm from "@/components/ReservaForm";

export default function ReservasPage() {
  return (
    <SessionProvider>
      <div className="p-8 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Agendar Cita</h1>
        <AuthStatus />
        <div className="mt-6">
          <ReservaForm />
        </div>
      </div>
    </SessionProvider>
  );
}
