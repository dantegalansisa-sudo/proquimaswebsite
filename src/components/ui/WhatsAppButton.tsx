"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/18295824613?text=Hola%20PROQUIMAS%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido.%20%C2%BFQu%C3%A9%20productos%20tienen%20disponibles%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp-dark text-white p-4 rounded-full shadow-2xl transition-colors ring-4 ring-whatsapp/20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-accent rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-accent rounded-full" />
    </motion.a>
  );
}
