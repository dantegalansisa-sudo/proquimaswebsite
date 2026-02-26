"use client";

import { DollarSign, Truck, ShieldCheck, Headphones } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reasons = [
  {
    icon: DollarSign,
    title: "Precios Inigualables",
    desc: "Compre al detalle con precios de por mayor. Los mejores precios de Santiago garantizados.",
  },
  {
    icon: Truck,
    title: "Delivery Rápido",
    desc: "Servicio de entrega el mismo día en Santiago. Tu pedido llega rápido y completo.",
  },
  {
    icon: ShieldCheck,
    title: "Productos de Calidad",
    desc: "Trabajamos con marcas reconocidas y productos que cumplen con los más altos estándares.",
  },
  {
    icon: Headphones,
    title: "Atención Personalizada",
    desc: "Te asesoramos en la selección de los productos correctos para tu necesidad específica.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 bg-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark font-[family-name:var(--font-heading)]">
              ¿Por Qué{" "}
              <span className="text-blue-accent">PROQUIMAS?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200/60">
                <div className="bg-blue-light w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                  <r.icon className="w-7 h-7 text-blue-accent" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-3 font-[family-name:var(--font-heading)]">
                  {r.title}
                </h3>
                <p className="text-gray-text text-sm">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
