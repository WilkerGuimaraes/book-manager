import { useMutation } from "@tanstack/react-query";
import { DeleteBookSchema } from "./schema";
import axios from "axios";
import { queryClient } from "@/_lib/react-query";

export function useDeleteBook() {
  const { mutateAsync: deleteBookMutation } = useMutation({
    mutationFn: async ({ id }: DeleteBookSchema) => {
      await axios.delete(`http://localhost:3333/books/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-books"] });
    },
  });

  return deleteBookMutation;
}
