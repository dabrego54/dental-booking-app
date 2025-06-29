
'use client'

import { SessionProvider } from "next-auth/react";
import LoginPage from "@/components/LoginPage";

export default function LoginPageWrapper() {
  return (
    <SessionProvider>
      <LoginPage />
    </SessionProvider>
  );
}
