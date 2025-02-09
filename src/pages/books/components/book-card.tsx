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
import { useEffect, useState } from "react";
import { Sheet } from "@/_components/ui/sheet";
import { UpdateBookContent } from "./update-book-content";

interface BookCardProps {
  data: {
    id: string;
    title: string;
    description: string;
  };
}

export function BookCard({ data }: BookCardProps) {
  const [isAdminRole, setIsAdminRole] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser.role === "admin") {
        setIsAdminRole(true);
      }
    }
  }, []);

  return (
    <>
      <AlertDialog>
        <Dialog>
          <DialogTrigger className="flex min-h-36 flex-col rounded-md bg-slate-300 p-5 text-left">
            <span className="text-lg font-medium">{data.title}</span>

            <p
              className={`text-md line-clamp-5 font-medium leading-6 text-slate-500 ${
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

              <div className="flex justify-end gap-2">
                {isAdminRole && (
                  <>
                    <Button onClick={() => setIsSheetOpen(true)}>Editar</Button>

                    <AlertDialogTrigger asChild>
                      <Button className="bg-red-700 hover:bg-red-600">
                        Deletar
                      </Button>
                    </AlertDialogTrigger>
                  </>
                )}
              </div>
            </div>
          </DialogContent>

          {isAdminRole && <DeleteBookDialogContent bookId={data.id} />}
        </Dialog>
      </AlertDialog>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {isSheetOpen && (
          <UpdateBookContent data={data} setIsSheetOpen={setIsSheetOpen} />
        )}
      </Sheet>
    </>
  );
}
