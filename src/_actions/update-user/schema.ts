import { z } from "zod";

export const updateUserSchema = z.object({
  id: z.string().uuid(),
  role: z.string(),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
