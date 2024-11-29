export interface BooksResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Book[];
}

export interface Book {
  id: string;
  title: string;
  description: string;
}
