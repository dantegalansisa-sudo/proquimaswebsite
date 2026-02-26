"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ArrowRight, SprayCan, Shield, Paintbrush, Package, Armchair, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Limpieza", icon: SprayCan, href: "#productos" },
  { name: "Desinfección", icon: Shield, href: "#productos" },
  { name: "Artículos de Limpieza", icon: Paintbrush, href: "#productos" },
  { name: "Plásticos", icon: Package, href: "#productos" },
  { name: "Mobiliario", icon: Armchair, href: "#productos" },
  { name: "Otros", icon: ShoppingBag, href: "#productos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm py-2 px-4 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            <span className="flex items-center gap-1">
              📦 Servicio Rápido a Domicilio · Santiago y alrededores
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1">
              📞 829-582-4613
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/18295824613"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-whatsapp transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 shrink-0">
              <div>
                <span className="text-2xl font-extrabold text-navy font-[family-name:var(--font-heading)]">
                  PROQUIMAS
                </span>
                <span className="text-lg font-semibold text-gray-text ml-1">S.R.L.</span>
                <p className="text-xs text-gray-text -mt-1">Productos Químicos y Más</p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#inicio" className="text-dark/70 hover:text-blue-accent transition-colors font-medium">
                Inicio
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="flex items-center gap-1 text-dark/70 hover:text-blue-accent transition-colors font-medium">
                  Productos <ChevronDown className="w-4 h-4" />
                </button>
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-light transition-colors"
                        onClick={() => setShowDropdown(false)}
                      >
                        <cat.icon className="w-4 h-4 text-blue-accent" />
                        <span className="text-sm text-dark/70">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#delivery" className="text-dark/70 hover:text-blue-accent transition-colors font-medium">
                Delivery
              </Link>
              <Link href="#nosotros" className="text-dark/70 hover:text-blue-accent transition-colors font-medium">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-dark/70 hover:text-blue-accent transition-colors font-medium">
                Contacto
              </Link>
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:8295824613" className="flex items-center gap-2 text-dark/70 hover:text-blue-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">829-582-4613</span>
              </a>
              <a
                href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-accent hover:bg-blue-accent-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
              >
                Pedir Ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-dark/70"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link href="#inicio" className="block py-2 text-dark/70 hover:text-blue-accent font-medium" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
              <Link href="#productos" className="block py-2 text-dark/70 hover:text-blue-accent font-medium" onClick={() => setIsOpen(false)}>
                Productos
              </Link>
              <div className="pl-4 space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="flex items-center gap-2 py-1.5 text-sm text-dark/60 hover:text-blue-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </Link>
                ))}
              </div>
              <Link href="#delivery" className="block py-2 text-dark/70 hover:text-blue-accent font-medium" onClick={() => setIsOpen(false)}>
                Delivery
              </Link>
              <Link href="#nosotros" className="block py-2 text-dark/70 hover:text-blue-accent font-medium" onClick={() => setIsOpen(false)}>
                Nosotros
              </Link>
              <Link href="#contacto" className="block py-2 text-dark/70 hover:text-blue-accent font-medium" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
              <hr className="border-gray-100" />
              <a href="tel:8295824613" className="flex items-center gap-2 py-2 text-dark/70">
                <Phone className="w-4 h-4" />
                829-582-4613
              </a>
              <a
                href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-accent hover:bg-blue-accent-dark text-white px-5 py-3 rounded-lg font-semibold text-sm text-center transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  Pedir Ahora
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
