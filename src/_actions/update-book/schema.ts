import { z } from "zod";

export const updateBookSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, { message: "O título do livro é obrigatório." }),
  description: z
    .string()
    .min(20, {
      message: "A descrição do livro deve conter pelo menos 20 caracteres.",
    }),
});

export type UpdateBookSchema = z.infer<typeof updateBookSchema>;
