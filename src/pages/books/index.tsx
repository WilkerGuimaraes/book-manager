import { useSearchParams } from "react-router-dom";
import { Header } from "../../_components/header";
import { useBooks } from "@/_data-access/use-books";
import { BookCard } from "./components/book-card";

export function Books() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("_page")
    ? Number(searchParams.get("_page"))
    : 1;

  const { booksResponse } = useBooks(page);

  return (
    <div className="m-8 flex flex-col rounded-lg bg-white">
      <Header />

      <div className="m-8 overflow-auto rounded bg-white">
        <div className="m-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {booksResponse?.data.map((book) => (
            <BookCard key={book.id} data={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
