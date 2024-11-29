import { BooksResponse } from "@/data/books";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useBooks(page: number) {
  const { data: booksResponse, isLoading } = useQuery<BooksResponse>({
    queryKey: ["get-books", page],
    queryFn: async () => {
      const response = await axios.get<BooksResponse>(
        "http://localhost:3333/books",
        {
          params: {
            _page: page,
            _per_page: 10,
          },
        },
      );

      return response.data;
    },
  });

  return { booksResponse, isLoading };
}
