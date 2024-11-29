import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookFormSchema, bookFormSchema } from "../schema/new-book";
import { Button } from "@/_components/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/_components/ui/sheet";
import { useCreateBook } from "@/_data-access/use-create-book";
import { toast } from "sonner";

interface CreateNewBookProps {
  onSubmitSuccess: () => void;
}

export function CreateNewBook({ onSubmitSuccess }: CreateNewBookProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormSchema>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const createBook = useCreateBook();

  async function onSubmit(data: BookFormSchema) {
    try {
      await createBook(data);
      onSubmitSuccess();
      toast.success("Livro cadastrado com sucesso!");
      reset();
    } catch (error) {
      toast.error("Erro ao cadastrar o livro.");
      console.log(error);
    }
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-2xl font-bold">Criar Novo Livro</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col justify-start">
          <label htmlFor="title" className="font-semibold">
            Título:
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="rounded-sm border-none bg-zinc-100 p-2"
          />

          {errors.title && (
            <span className="text-sm text-red-500">
              {errors.title?.message}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col justify-start">
          <label htmlFor="description" className="font-semibold">
            Descrição:
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="h-[400px] resize-none rounded-sm border-none bg-zinc-100 p-2"
          />

          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description?.message}
            </span>
          )}
        </div>

        <div className="mb-4 flex items-center justify-end">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </SheetContent>
  );
}
