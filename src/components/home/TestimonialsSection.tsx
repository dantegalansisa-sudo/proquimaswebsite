"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    text: "Llevo años comprándole a PROQUIMAS y nunca me han fallado. Los precios son los mejores de Santiago y el delivery llega el mismo día. Para mi negocio son indispensables.",
    name: "Roberto Almonte",
    role: "Dueño de Restaurante, Santiago",
  },
  {
    text: "Pedimos todos los productos de limpieza para nuestro hotel por WhatsApp y nos llegan al día siguiente. La calidad es consistente y los precios son inmejorables. Súper recomendados.",
    name: "Carmen Feliz",
    role: "Gerente de Hotel, Santiago",
  },
  {
    text: "Lo mejor de PROQUIMAS es que puedes comprar desde una unidad al precio de mayorista. Ideal para mi colmado. Además el servicio a domicilio me ahorra tiempo y dinero.",
    name: "Juan Carlos Peña",
    role: "Comerciante, Santiago",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark font-[family-name:var(--font-heading)]">
              Lo Que Dicen{" "}
              <span className="text-blue-accent">Nuestros Clientes</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-gray-bg rounded-xl p-6 lg:p-8 h-full flex flex-col border border-gray-200/60 relative">
                {/* Quote decoration */}
                <Quote className="w-8 h-8 text-blue-accent/15 absolute top-4 right-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-yellow-accent text-yellow-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-text text-sm lg:text-base mb-6 flex-grow italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{t.name}</p>
                    <p className="text-gray-text text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
