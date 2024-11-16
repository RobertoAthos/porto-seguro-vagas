"use server";
import { createClient } from "@/utils/supabase/server";
import { emailAndPasswordSchema } from "@/validation/emailAndPassword";

export const authenticateUser = async ({
  email,
  password,
  isSignUp,
}: {
  email: string;
  password: string;
  isSignUp: boolean;
}) => {
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

  let data = null;
  let error = null;

  try {
    if (!isSignUp) {
      ({ data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      }));
    } else {
      ({ data, error } = await supabase.auth.signUp({
        email,
        password,
      }));
    }
  } catch (error) {
    console.error(error);
  }

  if (error) {
    return {
      error: true,
      message: error.message,
    };
  }

  if (data?.user && data.user.identities && data.user.identities.length === 0) {
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
