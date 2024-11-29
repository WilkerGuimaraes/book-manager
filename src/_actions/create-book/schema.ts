import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const bookFormSchema = z.object({
  id: z.string().uuid().default(uuidv4()),
  title: z.string().min(1, { message: "O título do livro é obrigatório." }),
  description: z
    .string()
    .min(1, { message: "A descrição do livro é obrigatória." }),
});

export type BookFormSchema = z.infer<typeof bookFormSchema>;
