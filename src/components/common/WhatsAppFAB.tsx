"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919672232299?text=Hi%20RD%20Models%2C%20I%20want%20to%20enquire%20about%20a%20scale%20model%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9990] group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-[pulse-ring_3s_ease-out_infinite]" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        </div>
      </div>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0F0F18] border border-[rgba(212,168,67,0.2)] text-[var(--platinum)] text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
