"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ChevronLeft, Mail } from "lucide-react";
import EmailPasswordForm from "./EmailPasswordForm";
import { useRouter } from "next/navigation";
import GoogleAuthButton from "./GoogleAuthButton";

export default function AuthComponent({
  isSignUp = false,
}: {
  isSignUp?: boolean;
}) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const router = useRouter();

  const routerUrl = isSignUp ? "/login" : "/cadastro";

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-lg bg-palette-white shadow-xl border border-palette-dark">
        <button
          type="button"
          className="flex items-center gap-x-2 p-8 hover:underline"
          onClick={() => router.back()}
        >
          <ChevronLeft size={30} />
          <h3 className="text-xl">Voltar</h3>
        </button>
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold text-palette-dark">
            {isSignUp ? "Crie sua conta" : "Bem vindo de volta :)"}
          </CardTitle>
          <CardDescription className="text-palette-charcoal text-lg">
            {showEmailForm
              ? "Insira suas credenciais"
              : isSignUp
              ? "Escolha uma das opções abaixo para se cadastrar"
              : "Escolha como vai fazer login"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!showEmailForm ? (
            <>
              <GoogleAuthButton isSignUp={isSignUp} />
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg text-palette-charcoal font-medium">
                  ou
                </span>
              </div>
              <button
                className="w-full flex items-center justify-evenly py-3 rounded-md bg-palette-lime text-palette-dark hover:bg-palette-mint transition-all duration-300 shadow-md"
                onClick={() => setShowEmailForm(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                {isSignUp ? "Cadastrar" : "Continuar"} com Email
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </>
          ) : (
            <EmailPasswordForm
              setShowEmailForm={setShowEmailForm}
              isSignUp={isSignUp}
            />
          )}
        </CardContent>
        <button
          className="w-full py-2 mb-4 text-center underline hover:text-palette-dark"
          type="button"
          onClick={() => router.push(routerUrl)}
        >
          {isSignUp
            ? "Já tem uma conta? Faça login"
            : "Não tem uma conta? Cadastre-se"}
        </button>
      </Card>
    </div>
  );
}
