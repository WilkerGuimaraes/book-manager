import { BookPlusIcon, MenuIcon, UserRoundCogIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CreateNewBook } from "@/pages/books/components/create-new-book";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export function Header() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">Book Manager</h1>

      <div className="flex items-center">
        <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-lg">Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-lg font-semibold">
                <UserRoundCogIcon size={24} />
                Users List
              </DropdownMenuItem>
              <SheetTrigger asChild>
                <DropdownMenuItem className="gap-2 text-lg font-semibold">
                  <BookPlusIcon size={24} />
                  New Book
                </DropdownMenuItem>
              </SheetTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <CreateNewBook onSubmitSuccess={() => setSheetIsOpen(false)} />
        </Sheet>
      </div>
    </div>
  );
}
