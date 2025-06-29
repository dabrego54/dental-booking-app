"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;

  if (!session) {
    return (
      <button
        onClick={() => signIn("google")}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Iniciar sesión con Google
      </button>
    );
  }

  return (
    <div className="space-y-2">
      <p>Sesión iniciada como <strong>{session.user?.email}</strong></p>
      <button
        onClick={() => signOut()}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
