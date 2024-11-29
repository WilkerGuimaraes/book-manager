import { Button } from "@/_components/ui/button";
import { Book } from "@/data/books";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  books: Book[];
  page: number;
  items: number;
  pages: number;
}

export function Pagination({ books, page, items, pages }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();

  function firstPage() {
    setSearchParams((params) => {
      params.set("_page", "1");

      return params;
    });
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return;
    }

    setSearchParams((params) => {
      params.set("_page", String(page - 1));

      return params;
    });
  }

  function nextPage() {
    if (page + 1 > pages) {
      return;
    }

    setSearchParams((params) => {
      params.set("_page", String(page + 1));

      return params;
    });
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set("_page", String(pages));

      return params;
    });
  }

  return (
    <div className="flex flex-col flex-wrap items-center justify-between gap-4 text-sm md:flex-row">
      <span className="text-lg font-medium">
        Show {books.length} of {items} Books
      </span>

      <span className="text-lg font-medium">
        Page {page} of {pages}
      </span>

      <div className="space-x-1.5">
        <Button size={"icon"} onClick={firstPage} disabled={page - 1 <= 0}>
          <ChevronsLeft className="size-4" />
        </Button>
        <Button size={"icon"} onClick={previousPage} disabled={page - 1 <= 0}>
          <ChevronLeft className="size-4" />
        </Button>
        <Button size={"icon"} onClick={nextPage} disabled={page + 1 > pages}>
          <ChevronRight className="size-4" />
        </Button>
        <Button size={"icon"} onClick={lastPage} disabled={page + 1 > pages}>
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
