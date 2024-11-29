import { useSearchParams } from "react-router-dom";
import { Header } from "../../_components/header";
import { useBooks } from "@/_data-access/use-books";
import { BookCard } from "./components/book-card";
import { Pagination } from "./components/pagination";
import { BookSkeleton } from "./components/book-skeleton";

export function Books() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("_page")
    ? Number(searchParams.get("_page"))
    : 1;

  const { booksResponse, isLoading } = useBooks(page);

  return (
    <div className="m-8 flex min-h-[80vh] min-w-[80vw] flex-col justify-between rounded-lg bg-white p-8">
      <Header />

      <div className="rounded bg-white">
        <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <BookSkeleton />
          ) : (
            <>
              {booksResponse?.data.map((book) => (
                <BookCard key={book.id} data={book} />
              ))}
            </>
          )}
        </div>
      </div>

      {booksResponse && (
        <Pagination
          books={booksResponse.data}
          page={page}
          items={booksResponse.items}
          pages={booksResponse.pages}
        />
      )}
    </div>
  );
}
