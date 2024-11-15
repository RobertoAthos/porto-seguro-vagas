import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function EmailPasswordForm({
  setShowEmailForm,
}: {
  setShowEmailForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <form className="space-y-4">
      <div className="space-y-2 flex flex-col">
        <label htmlFor="email" className="text-palette-charcoal">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="exemplo@gmail.com"
          className="border-palette-lime focus:ring-palette-lime p-2 rounded-md shadow-sm"
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="password" className="text-palette-charcoal">
          Senha
        </label>
        <input
          id="password"
          type="password"
          placeholder="***"
          className="border-palette-lime focus:ring-palette-lime p-2 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full flex py-3 justify-center items-center bg-palette-lime text-palette-dark hover:bg-palette-mint transition-all duration-300 shadow-md mt-4"
      >
        Fazer login
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
      <button
        type="button"
        className="w-full flex items-center justify-center text-palette-charcoal hover:underline"
        onClick={() => setShowEmailForm(false)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar
      </button>
    </form>
  );
}
