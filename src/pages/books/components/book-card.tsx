import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";

interface BookCardProps {
  data: {
    id: string;
    title: string;
    description: string;
  };
}

export function BookCard({ data }: BookCardProps) {
  return (
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
          <DialogTitle>
            <span className="text-sm font-medium">{data.title}</span>
          </DialogTitle>
          <DialogDescription>{data.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
