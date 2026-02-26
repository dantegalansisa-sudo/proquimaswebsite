"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark font-[family-name:var(--font-heading)]">
              Contáctanos
            </h2>
            <p className="text-gray-text mt-4 text-lg">
              Estamos listos para atenderte
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Info */}
          <ScrollReveal>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200/60">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-light p-3 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-blue-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Dirección</h4>
                    <p className="text-gray-text text-sm">
                      C/Independencia No. 217, Frente al Parque Valerio,
                      Santiago, Rep. Dom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-light p-3 rounded-full shrink-0">
                    <Phone className="w-5 h-5 text-blue-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Teléfonos</h4>
                    <p className="text-gray-text text-sm">
                      <a href="tel:8295824613" className="hover:text-blue-accent transition-colors">829-582-4613</a>
                      {" | "}
                      <a href="tel:8097536109" className="hover:text-blue-accent transition-colors">809-753-6109</a>
                      {" | "}
                      <a href="tel:8098691250" className="hover:text-blue-accent transition-colors">809-869-1250</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-light p-3 rounded-full shrink-0">
                    <Mail className="w-5 h-5 text-blue-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Email</h4>
                    <p className="text-gray-text text-sm">
                      <a href="mailto:proquimasrl@hotmail.com" className="hover:text-blue-accent transition-colors">
                        proquimasrl@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-light p-3 rounded-full shrink-0">
                    <Clock className="w-5 h-5 text-blue-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Horario</h4>
                    <p className="text-gray-text text-sm">
                      Lun - Vie: 8:00 AM - 6:00 PM
                      <br />
                      Sáb: 8:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/18295824613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Map */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm h-full min-h-[400px] flex flex-col border border-gray-200/60">
              <div className="flex-grow relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-70.6945!3d19.4517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI3JzA2LjEiTiA3MMKwNDEnNDAuMiJX!5e0!3m2!1ses!2sdo!4v1709000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 350 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de PROQUIMAS S.R.L."
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-4">
                <a
                  href="https://maps.google.com/?q=C/Independencia+217+Santiago+Republica+Dominicana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-accent hover:text-blue-accent-dark font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
