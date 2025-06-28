'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Home, Calendar, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-lg font-bold text-blue-600 hover:underline flex items-center gap-1">
          <Home size={18} /> Inicio
        </Link>
        <Link href="/reservas" className="hover:underline flex items-center gap-1">
          <Calendar size={18} /> Reservas
        </Link>
        <Link href="/dashboard" className="hover:underline flex items-center gap-1">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
      </div>

      <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
    </nav>
  );
}
