import {
  BookPlusIcon,
  LogOutIcon,
  MenuIcon,
  UserRoundCogIcon,
} from "lucide-react";
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
import { UsersList } from "@/pages/books/components/users-list";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const [activeSheetContent, setActiveSheetContent] = useState<
    "newBook" | "usersList" | null
  >(null);

  const closeSheet = () => {
    setSheetIsOpen(false);
    setActiveSheetContent(null);
  };

  const router = useNavigate();

  function logout() {
    localStorage.removeItem("user");

    router("/login");
  }

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
              <SheetTrigger asChild>
                <DropdownMenuItem
                  className="gap-2 text-lg font-semibold"
                  onClick={() => {
                    setActiveSheetContent("usersList");
                    setSheetIsOpen(true);
                  }}
                >
                  <UserRoundCogIcon size={24} />
                  Users List
                </DropdownMenuItem>
              </SheetTrigger>
              <SheetTrigger asChild>
                <DropdownMenuItem
                  className="gap-2 text-lg font-semibold"
                  onClick={() => {
                    setActiveSheetContent("newBook");
                    setSheetIsOpen(true);
                  }}
                >
                  <BookPlusIcon size={24} />
                  New Book
                </DropdownMenuItem>
              </SheetTrigger>

              <DropdownMenuItem
                className="gap-2 text-lg font-semibold"
                onClick={logout}
              >
                <LogOutIcon size={24} />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {activeSheetContent === "usersList" && <UsersList />}

          {activeSheetContent === "newBook" && (
            <CreateNewBook onSubmitSuccess={closeSheet} />
          )}
        </Sheet>
      </div>
    </div>
  );
}
