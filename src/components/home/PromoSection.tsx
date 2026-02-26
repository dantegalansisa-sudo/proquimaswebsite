"use client";

import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PromoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy-medium to-navy relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-[10%] w-40 h-40 border border-white/[0.04] rotate-45" />
        <div className="absolute bottom-10 right-[15%] w-32 h-32 border border-white/[0.06] rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-blue-accent/[0.1] rotate-45" />
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-white/[0.05] rotate-45" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block bg-yellow-accent text-dark px-5 py-2 rounded-full text-sm font-bold mb-6">
            🔥 OFERTA ESPECIAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Compre al Detalle con Precios de Por Mayor
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            En PROQUIMAS no necesitas comprar en grandes cantidades para obtener
            los mejores precios. Vendemos desde una unidad al mismo precio
            mayorista.
          </p>
          <a
            href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20me%20gustar%C3%ADa%20conocer%20sus%20ofertas%20especiales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-accent hover:bg-blue-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-accent/25"
          >
            <MessageCircle className="w-5 h-5" />
            Ver Ofertas por WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
