import { AlertDialog, AlertDialogTrigger } from "@/_components/ui/alert-dialog";
import { Button } from "@/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
import { DeleteBookDialogContent } from "./delete-dialog-content";

interface BookCardProps {
  data: {
    id: string;
    title: string;
    description: string;
  };
}

export function BookCard({ data }: BookCardProps) {
  return (
    <AlertDialog>
      <Dialog>
        <DialogTrigger className="flex flex-col gap-3 rounded-md bg-slate-300 p-5 text-left">
          <span className="text-sm font-medium">{data.title}</span>

          <p
            className={`line-clamp-5 text-sm leading-6 text-slate-500 ${
              /\S{20,}/.test(data.description) ? "break-all" : "break-words"
            }`}
          >
            {data.description}
          </p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              {data.title}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex h-[400px] flex-col justify-between">
            <p>{data.description}</p>

            <div className="flex justify-end">
              <AlertDialogTrigger asChild>
                <Button className="bg-red-700 hover:bg-red-600">Deletar</Button>
              </AlertDialogTrigger>
            </div>
          </div>
        </DialogContent>

        <DeleteBookDialogContent bookId={data.id} />
      </Dialog>
    </AlertDialog>
  );
}
