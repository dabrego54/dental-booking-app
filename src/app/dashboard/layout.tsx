// ✅ src/app/dashboard/layout.tsx
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="max-w-6xl mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  );
}
