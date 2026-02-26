"use client";

import { MessageCircle, type LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
}

export default function ProductCard({ icon: Icon, name }: ProductCardProps) {
  const whatsappMsg = encodeURIComponent(
    `Hola PROQUIMAS, me interesa el producto: ${name}. ¿Cuál es el precio y la disponibilidad?`
  );

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-gray-200/60 hover:border-blue-accent/30 flex flex-col items-center text-center gap-3 group">
      <div className="bg-blue-light rounded-full p-3">
        <Icon className="w-6 h-6 text-blue-accent" />
      </div>
      <h4 className="font-semibold text-dark text-sm">{name}</h4>
      <a
        href={`https://wa.me/18295824613?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1 text-blue-accent hover:text-blue-accent-dark text-xs font-semibold transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Pedir
      </a>
    </div>
  );
}
