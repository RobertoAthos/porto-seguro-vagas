import { z } from "zod";

export const emailAndPasswordSchema = z.object({
  email: z.string({required_error: 'E-mail é um campo obrigatório'}).email({
    message: "Email inválido",
  }),
  password: z
    .string({required_error: 'Senha é um campo obrigatório'})
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),
});
