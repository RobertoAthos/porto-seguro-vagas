import Image from "next/image";
import React from "react";
import GoogleAuthButton from "../auth/GoogleAuthButton";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white to-[#40e0d03d]">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="">
          <h1 className="text-palette-charcoal font-semibold text-3xl mb-8 md:mb-0 leading-10">
            Encontre Vagas em Porto Seguro, Arraial d&apos;Ajuda e Trancoso –
            Conecte-se às Melhores Oportunidades da Região!
          </h1>
          <div className="w-1/2 mt-8 space-y-4">
            <GoogleAuthButton />
            <button className="w-full flex items-center justify-evenly py-3 rounded-md bg-palette-lime text-palette-dark hover:underline shadow-md">
              <Mail className="mr-2 h-5 w-5" />
              Continuar com Email
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <picture
          className="relative w-full h-[300px] md:h-[400px]"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 40%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 40%)",
          }}
        >
          <Image
            src="/porto-seguro-logo.jpg"
            layout="fill"
            objectFit="cover"
            alt="Porto Seguro - Bahia"
            className="opacity-25"
          />
        </picture>
      </div>
    </section>
  );
}
