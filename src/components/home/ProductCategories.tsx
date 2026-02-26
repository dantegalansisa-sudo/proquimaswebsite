"use client";

import { SprayCan, Shield, Paintbrush, Package, Armchair, ShoppingBag } from "lucide-react";
import CategoryCard from "@/components/ui/CategoryCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  {
    icon: SprayCan,
    title: "Productos de Limpieza",
    products:
      "Detergentes, Desinfectantes, Desgrasantes, Limpiador multiuso, Limpiador de baños, Pastas para fregar",
  },
  {
    icon: Shield,
    title: "Control y Desinfección",
    products:
      "Destructor de malos olores, Insecticida, Desinfectantes industriales",
  },
  {
    icon: Paintbrush,
    title: "Artículos y Herramientas",
    products: "Suapers (mops), Escobas plásticas, Zafacones, Desechables",
  },
  {
    icon: Package,
    title: "Plásticos en General",
    products: "Plásticos varios, Bolsas, Envases, Desechables plásticos",
  },
  {
    icon: Armchair,
    title: "Mobiliario",
    products: "Sillas, Mesas, Mobiliario para eventos y negocios",
  },
  {
    icon: ShoppingBag,
    title: "Productos Varios",
    products: "Shampoo, Armorall, Coolant, Miel de abeja pura",
  },
];

export default function ProductCategories() {
  return (
    <section id="productos" className="py-20 bg-blue-light relative overflow-hidden">
      {/* Geometric pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-blue-accent/[0.06] rotate-45" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-blue-accent/[0.08] rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-blue-accent/[0.05] rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark font-[family-name:var(--font-heading)]">
              Nuestros{" "}
              <span className="text-blue-accent">Productos</span>
            </h2>
            <p className="text-gray-text mt-4 max-w-2xl mx-auto text-lg">
              Todo lo que necesitas para la limpieza y mantenimiento de tu hogar,
              negocio u oficina
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
