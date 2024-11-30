import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const registerUserSchema = z.object({
  id: z.string().uuid().default(uuidv4()),
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  email: z.string().email({ message: "O e-mail é obrigatório." }),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter pelo menos 6 caracteres." }),
  role: z.enum(["admin", "commom"]).default("commom"),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
