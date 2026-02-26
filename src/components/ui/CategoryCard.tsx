"use client";

import { MessageCircle, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  products: string;
  delay?: number;
}

export default function CategoryCard({
  icon: Icon,
  title,
  products,
  delay = 0,
}: CategoryCardProps) {
  const whatsappMsg = encodeURIComponent(
    `Hola PROQUIMAS, me interesa la categoría ${title}. ¿Qué productos tienen disponibles?`
  );

  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/60 hover:border-blue-accent/30 group">
        {/* Icon header */}
        <div className="p-6 pb-0 flex justify-center">
          <div className="bg-blue-light w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-blue-accent" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 pt-4 text-center">
          <h3 className="font-bold text-dark text-lg mb-2 font-[family-name:var(--font-heading)]">
            {title}
          </h3>
          <p className="text-gray-text text-sm mb-4 line-clamp-2">{products}</p>
          <a
            href={`https://wa.me/18295824613?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-accent hover:text-blue-accent-dark font-semibold text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp →
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
