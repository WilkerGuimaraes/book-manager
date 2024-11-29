import { useDeleteBook } from "@/_actions/delete-book/use-delete-book";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteBookDialogContentProps {
  bookId: string;
}

export function DeleteBookDialogContent({
  bookId,
}: DeleteBookDialogContentProps) {
  const deleteBook = useDeleteBook();

  async function handleDeleteBook() {
    try {
      await deleteBook({ id: bookId });
      toast.success("Livro deletado com sucesso.");
    } catch (error) {
      toast.error("Erro ao deletar o livro.");
      console.log(error);
    }
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a excluir este livro. Esta ação não pode ser
          alterada.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleDeleteBook}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
