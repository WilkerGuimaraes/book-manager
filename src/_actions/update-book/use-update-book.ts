import { queryClient } from "@/_lib/react-query";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UpdateBookSchema } from "./schema";

export function useUpdateBook() {
  const { mutateAsync: updateBookMutation } = useMutation({
    mutationFn: async ({ id, title, description }: UpdateBookSchema) => {
      const response = await axios.put(`http://localhost:3333/books/${id}`, {
        title,
        description,
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-books"],
      });
    },
  });

  return updateBookMutation;
}
