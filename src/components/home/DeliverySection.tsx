"use client";

import { Truck, MapPin, Clock, Package, CheckCircle, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const deliveryBenefits = [
  "Entrega el mismo día en Santiago",
  "Delivery gratis en pedidos mayores a RD$3,000",
  "Pedidos fáciles por WhatsApp o llamada",
  "Horario de entrega flexible",
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-20 bg-navy relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 border border-white/[0.05] rotate-45" />
        <div className="absolute bottom-16 left-16 w-28 h-28 border border-white/[0.06] rotate-45" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-accent/[0.1] rotate-45" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <Truck className="w-14 h-14 text-blue-accent mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
                Servicio Rápido a Domicilio
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Recibe tus productos de limpieza directamente en tu negocio, oficina
                u hogar. Hacemos entregas en toda la ciudad de Santiago y zonas
                aledañas. Pedidos antes de las 2PM se entregan el mismo día.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="space-y-3 mb-8">
                {deliveryBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-blue-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20quiero%20hacer%20un%20pedido%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-accent hover:bg-blue-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-accent/25"
              >
                <MessageCircle className="w-5 h-5" />
                Hacer Pedido Ahora
              </a>
            </ScrollReveal>
          </div>

          {/* Right - Decorative */}
          <ScrollReveal direction="right">
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {[
                { Icon: Truck, label: "Delivery Rápido" },
                { Icon: MapPin, label: "Santiago y Alrededores" },
                { Icon: Clock, label: "Mismo Día" },
                { Icon: Package, label: "Pedido Completo" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-navy-medium/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center gap-3 border border-white/[0.06]"
                >
                  <item.Icon className="w-10 h-10 text-blue-accent" />
                  <span className="text-white/70 font-medium text-sm text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
