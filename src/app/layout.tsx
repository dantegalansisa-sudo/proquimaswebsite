import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROQUIMAS S.R.L. | Productos de Limpieza y Químicos | Santiago, Rep. Dom.",
  description:
    "Distribuidora de productos químicos, artículos de limpieza, mobiliario y más en Santiago, República Dominicana. Compre al detalle con precios de por mayor. Servicio rápido a domicilio.",
  keywords:
    "productos de limpieza, químicos, Santiago, República Dominicana, distribuidora, delivery, PROQUIMAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
