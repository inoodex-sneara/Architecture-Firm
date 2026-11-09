"use client";

import React from "react";

function MessengerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.734 7.218v3.524l3.373-1.854c.915.253 1.886.39 2.893.39 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.066 12.443l-2.614-2.79-5.1 2.79 5.61-5.955 2.678 2.79 5.036-2.79-5.61 5.955z" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneHandsetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
    </svg>
  );
}

export default function FloatingActions() {
  return (
    <aside
      aria-label="Floating Quick Contact"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3 select-none pointer-events-auto"
    >
      {/* 1. Messenger: Purple-Pink Gradient Circle with Real Messenger Lightning Bubble */}
      <a
        href="https://m.me/inoodex"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on Messenger"
        className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-gradient-to-tr from-[#006AFF] via-[#A838FF] to-[#FF4B6B] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(168,56,255,0.4)] hover:shadow-[0_12px_32px_rgba(168,56,255,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessengerIcon className="w-6 h-6" />
      </a>

      {/* 2. WhatsApp: Real Official WhatsApp Green Circle with Phone inside Bubble */}
      <a
        href="https://wa.me/8801313401405"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      {/* 3. Call Hotline: Deep Maroon/Burgundy Circle with Solid Handset Icon */}
      <a
        href="tel:16604"
        title="Call Hotline 16604"
        className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#831826] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(131,24,38,0.4)] hover:shadow-[0_12px_32px_rgba(131,24,38,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <PhoneHandsetIcon className="w-5 h-5 -rotate-12" />
      </a>
    </aside>
  );
}

export { FloatingActions };

