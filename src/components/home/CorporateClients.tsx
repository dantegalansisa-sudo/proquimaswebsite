"use client";

import { Hotel, UtensilsCrossed, Cross, Building2, GraduationCap, Home, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sectors = [
  {
    icon: Hotel,
    name: "Hoteles y Resorts",
    desc: "Productos de limpieza para habitaciones, áreas comunes y lavandería",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurantes y Comedores",
    desc: "Desengrasantes, desinfectantes y artículos desechables",
  },
  {
    icon: Cross,
    name: "Clínicas y Hospitales",
    desc: "Desinfectantes de grado hospitalario y artículos sanitarios",
  },
  {
    icon: Building2,
    name: "Oficinas y Empresas",
    desc: "Suministros de limpieza y mantenimiento para espacios de trabajo",
  },
  {
    icon: GraduationCap,
    name: "Escuelas y Colegios",
    desc: "Productos de higiene y limpieza para instituciones educativas",
  },
  {
    icon: Home,
    name: "Hogares",
    desc: "Todo lo que necesitas para mantener tu hogar limpio y fresco",
  },
];

export default function CorporateClients() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark font-[family-name:var(--font-heading)]">
              Atendemos{" "}
              <span className="text-blue-accent">Todos los Sectores</span>
            </h2>
            <p className="text-gray-text mt-4 max-w-2xl mx-auto text-lg">
              Precios especiales para compras recurrentes y al por mayor
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.name} delay={i * 0.1}>
              <div className="bg-gray-bg rounded-xl p-6 border border-gray-200/60 hover:border-blue-accent/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="bg-blue-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <sector.icon className="w-6 h-6 text-blue-accent" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">
                  {sector.name}
                </h3>
                <p className="text-gray-text text-sm">{sector.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20al%20por%20mayor%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-accent hover:bg-blue-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-accent/20"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Cotización al Por Mayor
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
