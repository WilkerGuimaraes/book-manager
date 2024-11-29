import { z } from "zod";

export const deleteBookSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteBookSchema = z.infer<typeof deleteBookSchema>;
