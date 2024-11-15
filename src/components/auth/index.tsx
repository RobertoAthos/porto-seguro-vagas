"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import EmailPasswordForm from "./EmailPasswordForm";
import { svgIcons } from "@/utils/svgIcons";

export default function LoginComponent() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-palette-ivory">
      <Card className="w-full max-w-md bg-palette-white shadow-xl border border-palette-lime/20">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold text-palette-dark">
            Bem vindo de volta {":)"}
          </CardTitle>
          <CardDescription className="text-palette-charcoal text-lg">
            {showEmailForm
              ? "Insira suas credenciais"
              : "Escolha como vai fazer login"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!showEmailForm ? (
            <>
              <button className="w-full flex gap-x-6 justify-center font-semibold items-center border rounded-lg py-3 text-palette-charcoal border-palette-charcoal hover:underline hover:text-palette-dark transition-all duration-300 shadow-sm">
                {svgIcons.google}
                Continuar com conta do Google
              </button>
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
                Continuar com Email
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </>
          ) : (
            <EmailPasswordForm setShowEmailForm={setShowEmailForm} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
