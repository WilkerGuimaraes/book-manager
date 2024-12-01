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
import { useEffect, useState } from "react";
import { UsersList } from "@/pages/books/components/users-list";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const [activeSheetContent, setActiveSheetContent] = useState<
    "newBook" | "usersList" | null
  >(null);
  const [isAdminRole, setIsAdminRole] = useState(false);
  const [isInitialAdmin, setIsInitialAdmin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser.role === "admin") {
        setIsAdminRole(true);
      }

      if (parsedUser.id === "bf2af7e6-aeb5-4201-b96c-f93721083364") {
        setIsInitialAdmin(true);
      }
    }
  }, []);

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
              <DropdownMenuLabel className="text-lg">Opções</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {isInitialAdmin && (
                <SheetTrigger asChild>
                  <DropdownMenuItem
                    className="gap-2 text-lg font-semibold"
                    onClick={() => {
                      setActiveSheetContent("usersList");
                      setSheetIsOpen(true);
                    }}
                  >
                    <UserRoundCogIcon size={24} />
                    Lista de Usuários
                  </DropdownMenuItem>
                </SheetTrigger>
              )}

              {isAdminRole && (
                <SheetTrigger asChild>
                  <DropdownMenuItem
                    className="gap-2 text-lg font-semibold"
                    onClick={() => {
                      setActiveSheetContent("newBook");
                      setSheetIsOpen(true);
                    }}
                  >
                    <BookPlusIcon size={24} />
                    Novo Livro
                  </DropdownMenuItem>
                </SheetTrigger>
              )}

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
