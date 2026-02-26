"use client";

import { motion } from "framer-motion";
import { SprayCan, Sparkles, Truck, ShoppingCart, DollarSign, MessageCircle, ArrowDown } from "lucide-react";

const heroCards = [
  { Icon: SprayCan, label: "Limpieza" },
  { Icon: Sparkles, label: "Calidad" },
  { Icon: Truck, label: "Delivery" },
  { Icon: ShoppingCart, label: "Variedad" },
  { Icon: DollarSign, label: "Mejor Precio" },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-navy overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[15%] w-40 h-40 border border-white/[0.06] rotate-45" />
        <div className="absolute top-40 right-[10%] w-24 h-24 border border-white/[0.08] rotate-45" />
        <div className="absolute bottom-20 left-[5%] w-32 h-32 border border-white/[0.05] rotate-45" />
        <div className="absolute top-10 left-[30%] w-20 h-20 border border-blue-accent/[0.15] rotate-45" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border-r border-white/[0.04] rotate-[30deg]" />
        <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] border-l border-white/[0.03] rotate-[30deg]" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-accent/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-accent/15 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-accent/20 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-accent/[0.06] rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-navy-medium/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              Distribuidora Líder en Santiago
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-[family-name:var(--font-heading)]"
            >
              Productos de Limpieza al{" "}
              <span className="text-blue-accent italic">Mejor Precio</span>{" "}
              de Santiago
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 mb-8 max-w-lg"
            >
              Distribuidora de productos químicos, artículos de limpieza, mobiliario y más.
              Compre al detalle con precios de por mayor. Servicio rápido a domicilio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-accent hover:bg-blue-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-accent/25"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </a>
              <a
                href="#productos"
                className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <ArrowDown className="w-5 h-5" />
                Ver Productos
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/40 text-sm"
            >
              📞 829-582-4613 | 809-753-6109 | 809-869-1250
            </motion.p>
          </div>

          {/* Right Column - Service Cards (Alico style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-4">
              {heroCards.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-shadow hover:-translate-y-1 duration-300"
                >
                  <div className="bg-blue-light w-14 h-14 rounded-full flex items-center justify-center">
                    <item.Icon className="w-7 h-7 text-blue-accent" />
                  </div>
                  <span className="text-dark font-semibold text-sm text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 px-8">
              {heroCards.slice(3).map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-shadow hover:-translate-y-1 duration-300"
                >
                  <div className="bg-blue-light w-14 h-14 rounded-full flex items-center justify-center">
                    <item.Icon className="w-7 h-7 text-blue-accent" />
                  </div>
                  <span className="text-dark font-semibold text-sm text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-10 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm">+500 clientes satisfechos</p>
            <div className="flex items-center gap-8 text-white/25 text-sm font-semibold">
              <span className="tracking-wider">HOTELES</span>
              <span className="hidden sm:inline text-white/10">|</span>
              <span className="tracking-wider">RESTAURANTES</span>
              <span className="hidden sm:inline text-white/10">|</span>
              <span className="tracking-wider">CLÍNICAS</span>
              <span className="hidden sm:inline text-white/10">|</span>
              <span className="tracking-wider hidden sm:inline">EMPRESAS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
