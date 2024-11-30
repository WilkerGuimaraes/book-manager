import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email({ message: "O e-mail é obrigatório." }),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter pelo menos 6 caracteres." }),
});

export type LoginUserSchema = z.infer<typeof loginUserSchema>;
