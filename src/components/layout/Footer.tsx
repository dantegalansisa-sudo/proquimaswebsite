import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const productLinks = [
  "Detergentes",
  "Desinfectantes",
  "Desgrasantes",
  "Limpiadores",
  "Plásticos",
  "Mobiliario",
];

const serviceLinks = [
  "Venta al Detalle",
  "Venta al Por Mayor",
  "Delivery a Domicilio",
  "Cotización Empresarial",
  "Asesoría de Productos",
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 - Brand */}
          <div>
            <h3 className="text-xl font-extrabold mb-1 font-[family-name:var(--font-heading)]">
              PROQUIMAS S.R.L.
            </h3>
            <p className="text-white/40 text-sm mb-4">
              Productos Químicos y Más
            </p>
            <p className="text-white/50 text-sm mb-6">
              Distribuidora líder de productos de limpieza y químicos en
              Santiago, República Dominicana. Más de 15 años sirviendo con
              calidad y los mejores precios.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/18295824613"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-accent/30 p-2.5 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:8295824613"
                className="bg-white/10 hover:bg-blue-accent/30 p-2.5 rounded-lg transition-colors"
                aria-label="Teléfono"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:proquimasrl@hotmail.com"
                className="bg-white/10 hover:bg-blue-accent/30 p-2.5 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 - Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-heading)]">
              Productos
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <Link
                    href="#productos"
                    className="text-white/50 hover:text-blue-accent transition-colors text-sm"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-heading)]">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="#contacto"
                    className="text-white/50 hover:text-blue-accent transition-colors text-sm"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-heading)]">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                C/Independencia No. 217, Frente al Parque Valerio, Santiago,
                Rep. Dom.
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="w-4 h-4 shrink-0" />
                <span>829-582-4613</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="w-4 h-4 shrink-0" />
                <span>809-753-6109</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="w-4 h-4 shrink-0" />
                <span>809-869-1250</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="w-4 h-4 shrink-0" />
                proquimasrl@hotmail.com
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Lun - Vie: 8:00 AM - 6:00 PM
                  <br />
                  Sáb: 8:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; 2026 PROQUIMAS S.R.L. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <span className="text-blue-accent font-semibold">NEXIX Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
