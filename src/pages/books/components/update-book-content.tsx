import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/_components/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/_components/ui/sheet";
import { toast } from "sonner";
import {
  updateBookSchema,
  UpdateBookSchema,
} from "@/_actions/update-book/schema";
import { useUpdateBook } from "@/_actions/update-book/use-update-book";
import { Dispatch, SetStateAction } from "react";

interface UpdateBookContentProps {
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
  data: UpdateBookSchema;
}

export function UpdateBookContent({
  data: { id, title, description },
  setIsSheetOpen,
}: UpdateBookContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBookSchema>({
    resolver: zodResolver(updateBookSchema.omit({ id: true })),
    defaultValues: {
      id,
      title,
      description,
    },
  });

  const updateBook = useUpdateBook();

  async function onSubmit(
    data: Pick<UpdateBookSchema, "title" | "description">,
  ) {
    try {
      await updateBook({ id, ...data });
      setIsSheetOpen(false);
      toast.success("Livro atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar o livro.");
      console.log(error);
    }
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-2xl font-bold">Editar Livro</SheetTitle>
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
          <Button type="submit">Salvar Alterações</Button>
        </div>
      </form>
    </SheetContent>
  );
}
