"use client";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export const useGoogle = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const supabase = createClient()

  const next = '/ps/feed';

  async function signInWithGoogle() {
    setIsGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback${
            next ? `?next=${encodeURIComponent(next)}` : ""
          }`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error: unknown) {
      alert("Erro ao tentar fazer login com Google");
      console.error("Error signing in with Google", error);
      setIsGoogleLoading(false);
    }
  }

  return {
    isGoogleLoading,
    signInWithGoogle,
  };
};
