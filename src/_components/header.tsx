import { BookPlusIcon, MenuIcon, UserRoundCogIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <div className="m-8 flex w-full items-center justify-between">
      <h1 className="text-2xl font-medium">Book Manager</h1>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button variant={"ghost"} className="gap-2">
                <UserRoundCogIcon size={24} />
                Users List
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant={"ghost"} className="gap-2">
                <BookPlusIcon size={24} />
                New Book
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
