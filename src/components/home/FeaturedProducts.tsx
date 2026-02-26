"use client";

import {
  Droplets,
  ShieldCheck,
  Bug,
  Wind,
  FlaskConical,
  Brush,
  Trash2,
  Package,
  Sparkles,
  Bath,
  UtensilsCrossed,
  Armchair,
  Table,
  Pipette,
  Car,
  SprayCan,
  Container,
  Thermometer,
  Flower2,
} from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const products = [
  { icon: Droplets, name: "Detergentes" },
  { icon: ShieldCheck, name: "Desinfectantes" },
  { icon: Bug, name: "Insecticida" },
  { icon: Wind, name: "Destructor de Malos Olores" },
  { icon: FlaskConical, name: "Desgrasantes" },
  { icon: Brush, name: "Suapers" },
  { icon: Trash2, name: "Escobas Plásticas" },
  { icon: Package, name: "Plásticos en General" },
  { icon: Sparkles, name: "Pastas para Fregar" },
  { icon: Bath, name: "Limpiador de Baños" },
  { icon: UtensilsCrossed, name: "Desechables" },
  { icon: Armchair, name: "Sillas" },
  { icon: Table, name: "Mesas" },
  { icon: Pipette, name: "Shampoo" },
  { icon: Car, name: "Armorall" },
  { icon: SprayCan, name: "Limpiador Multiuso" },
  { icon: Container, name: "Zafacones" },
  { icon: Thermometer, name: "Coolant" },
  { icon: Flower2, name: "Miel de Abeja Pura" },
];

export default function FeaturedProducts() {
  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark font-[family-name:var(--font-heading)]">
              Catálogo{" "}
              <span className="text-blue-accent">Completo</span>
            </h2>
            <p className="text-gray-text mt-4 max-w-2xl mx-auto text-lg">
              Más de 20 productos disponibles para entrega inmediata
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.03}>
              <ProductCard {...product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
