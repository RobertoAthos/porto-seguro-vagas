import Image from "next/image";
import React from "react";
// import GoogleAuthButton from "../auth/GoogleAuthButton";
// import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-br from-white to-[#40e0d03d]">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="p-8">
          <h1 className="text-palette-charcoal font-semibold text-3xl mb-8 md:mb-0 leading-10">
            Vagas de emprego em Porto Seguro, Arraial d&apos;Ajuda e Trancoso –
            Conecte-se às Melhores Oportunidades da Região!
          </h1>
          <p className="w-2/3 mt-4 font-medium text-base text-palette-dark">
            Inscreva-se na lista de espera e seja o primeiro a saber quando a
            nossa plataforma for lançada oficialmente!
          </p>

          <div className="w-1/2 mt-8 space-y-4">
            FORM AQUI
          </div>
        </div>
        <picture className="w-full h-full">
          <Image
            src="/hero-img.svg"
            width={400}
            height={400}
            alt="Porto Seguro - Bahia"
            className="w-auto h-auto"
          />
        </picture>
      </div>
    </section>
  );
}
