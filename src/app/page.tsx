import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Smile, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
            Bienvenido a <span className="text-blue-500">MO DENTAL</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Tecnología de punta. Atención humana. Tu sonrisa, nuestra prioridad.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/reservas">
              <Button className="px-6 py-3 text-lg">Agendar Cita</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="px-6 py-3 text-lg">
                Ver Panel
              </Button>
            </Link>
          </div>
          <img
            src="/dental-hero.jpg"
            alt="Dentista atendiendo paciente"
            className="mx-auto mt-10 w-full max-w-md drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="py-20 bg-gray-50 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">¿Quiénes somos?</h2>
          <p className="text-gray-600 text-lg">
            MO DENTAL es una clínica especializada en devolver confianza a través de sonrisas sanas. Combinamos experiencia, innovación y vocación médica.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Nuestros servicios</h2>
          <p className="text-gray-600">Especialistas certificados en diversas áreas odontológicas</p>
        </div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <BadgeCheck className="mx-auto text-blue-600" size={36} />
            <h3 className="text-xl font-semibold mt-4">Implantes</h3>
            <p className="text-gray-500 text-sm mt-2">Soluciones fijas para recuperar tu sonrisa.</p>
          </div>
          <div className="border rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <Smile className="mx-auto text-blue-600" size={36} />
            <h3 className="text-xl font-semibold mt-4">Estética dental</h3>
            <p className="text-gray-500 text-sm mt-2">Blanqueamiento, carillas y armonización facial.</p>
          </div>
          <div className="border rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <ShieldCheck className="mx-auto text-blue-600" size={36} />
            <h3 className="text-xl font-semibold mt-4">Ortodoncia</h3>
            <p className="text-gray-500 text-sm mt-2">Brackets tradicionales y alineadores invisibles.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700">Lo que dicen nuestros pacientes</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white p-6 rounded-xl shadow text-left">
            <p className="text-gray-600 italic">“MO DENTAL me cambió la vida. ¡Gracias por devolverme la seguridad!”</p>
            <footer className="mt-4 text-sm text-blue-600 font-semibold">– Camila R.</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow text-left">
            <p className="text-gray-600 italic">“Excelente atención, todo muy limpio y moderno. Recomendados al 100%.”</p>
            <footer className="mt-4 text-sm text-blue-600 font-semibold">– Juan M.</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-12">
        <div className="space-y-2">
          <p className="font-bold text-lg">MO DENTAL</p>
          <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <div className="text-xs text-blue-200">Diseñado con amor y precisión.</div>
        </div>
      </footer>
    </div>
  );
}
