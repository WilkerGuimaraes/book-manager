import { useMutation } from "@tanstack/react-query";
import { BookFormSchema } from "./schema";
import axios from "axios";
import { queryClient } from "@/_lib/react-query";

export function useCreateBook() {
  const { mutateAsync: createBookMutation } = useMutation({
    mutationFn: async ({ title, description }: BookFormSchema) => {
      await axios.post("http://localhost:3333/books", {
        title,
        description,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-books"],
      });
    },
  });

  return createBookMutation;
}
