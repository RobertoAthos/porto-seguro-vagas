"use client"
import React from "react";
import { svgIcons } from "@/utils/svgIcons";
import { useGoogle } from "./use-google";

export default function GoogleAuthButton({
  isSignUp = false,
}: {
  isSignUp?: boolean;
}) {
  const { signInWithGoogle } = useGoogle();
  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      className="w-full bg-white flex gap-x-6 justify-center font-semibold items-center border rounded-lg py-3 text-palette-charcoal border-palette-charcoal hover:underline hover:text-palette-dark transition-all duration-300 shadow-sm"
    >
      {svgIcons.google}
      {isSignUp ? "Cadastrar" : "Continuar"} com uma conta do Google
    </button>
  );
}
