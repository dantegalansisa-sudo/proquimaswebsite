"use client";

import { Truck, BadgeDollarSign, CheckCircle, Package } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: Truck,
    title: "Delivery Rápido",
    desc: "Entrega en el día en Santiago",
  },
  {
    icon: BadgeDollarSign,
    title: "Precios de Mayor",
    desc: "Compre al detalle con precio mayorista",
  },
  {
    icon: CheckCircle,
    title: "Productos de Calidad",
    desc: "Marcas reconocidas y confiables",
  },
  {
    icon: Package,
    title: "Pedidos por WhatsApp",
    desc: "Haga su pedido fácil y rápido",
  },
];

export default function BenefitsBar() {
  return (
    <section className="bg-white shadow-md relative z-10 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="flex items-start gap-3 lg:border-r lg:last:border-r-0 border-gray-100 lg:pr-6">
                <div className="bg-blue-light p-2.5 rounded-full shrink-0">
                  <b.icon className="w-5 h-5 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-sm lg:text-base">
                    {b.title}
                  </h3>
                  <p className="text-gray-text text-xs lg:text-sm">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
