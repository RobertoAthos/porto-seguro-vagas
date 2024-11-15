"use client";
import { registerUser } from "@/app/actions/handleSignUp";
import { emailAndPasswordSchema } from "@/validation/emailAndPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof emailAndPasswordSchema>>({
    resolver: zodResolver(emailAndPasswordSchema),
    mode: "onChange",
  });

  const handleSubmit = async (data: z.infer<typeof emailAndPasswordSchema>) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await registerUser({
        email: data.email,
        password: data.password,
      });

      if (response.error) {
        setError(response.message);
      } else {
        router.push("/");
      }
    } catch (error: unknown) {
      console.error(error);
      setError("Um erro inesperado ocorreu. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    handleSubmit,
    form
  };
};
