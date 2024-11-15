"use server";
import { createClient } from "@/utils/supabase/server";
import { emailAndPasswordSchema } from "@/validation/emailAndPassword";

export const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log("register user action")
  const newUserValidation = emailAndPasswordSchema.safeParse({
    email,
    password,
  });

  if (!newUserValidation.success) {
    return {
      error: true,
      message: newUserValidation.error.issues[0]?.message ?? "An error occured",
    };
  }

  const supabase = await createClient();

  const { data, error } = supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      error: true,
      message: error.message,
    };
  }

  if (data.user && data.user.identities && data.user.identities.length === 0) {
    return {
      error: true,
      message: "Email já está sendo usado em outra conta",
    };
  }

  return {
    success: true,
    message: "Conta criada com sucesso!",
  };
};
