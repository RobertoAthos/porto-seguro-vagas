"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useAuth } from "./user-auth";
import FieldErrorMessage from "../ui/FieldErrorMessage";
import Spinner from "../ui/Spinner";

export default function EmailPasswordForm({
  setShowEmailForm,
  isSignUp,
}: {
  setShowEmailForm: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUp: boolean;
}) {
  const { handleSubmit, isLoading, form } = useAuth({isSignUp});
  const formErrors = form.formState.errors;
  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="email" className="text-palette-charcoal">
          Email
        </label>
        <input
          id="email"
          {...form.register("email")}
          name="email"
          type="email"
          placeholder="exemplo@gmail.com"
          className="border-palette-lime focus:ring-palette-lime p-2 rounded-md shadow-sm"
        />
      </div>
      {formErrors.email?.message && (
        <FieldErrorMessage message={formErrors.email.message} />
      )}
      <div className="space-y-2 flex flex-col">
        <label htmlFor="password" className="text-palette-charcoal">
          Senha
        </label>
        <input
          {...form.register("password")}
          name="password"
          id="password"
          type="password"
          placeholder="***"
          className="border-palette-lime focus:ring-palette-lime p-2 rounded-md shadow-sm"
        />
        {formErrors.password?.message && (
          <FieldErrorMessage message={formErrors.password.message} />
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex py-3 justify-center items-center bg-palette-lime text-palette-dark hover:bg-palette-mint transition-all duration-300 shadow-md mt-4"
      >
        {isLoading ? (
          <Spinner color="pallete-dark" size="md" />
        ) : (
          <>
            {isSignUp ? "Cadastrar" : "Continuar"} com Email
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
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
