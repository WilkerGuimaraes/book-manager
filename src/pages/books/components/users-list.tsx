import { useUpdateUser } from "@/_actions/update-user/use-update-user";
import { Button } from "@/_components/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/_components/ui/sheet";
import { useUsers } from "@/_data-access/use-users";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";

export function UsersList() {
  const { usersResponse } = useUsers();

  const updateUser = useUpdateUser();

  function handleUpdateRole(id: string, newRole: string) {
    updateUser({ id, role: newRole });
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-2xl font-bold">
          Lista de usuários cadastrados
        </SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>

      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Administradores</h3>
          <ul>
            {usersResponse?.map((user) => (
              <li key={user.id}>
                {user.role === "admin" && (
                  <div className="flex items-center justify-between">
                    <p className="text-xl">
                      <span>• </span>
                      {user.name}
                    </p>
                    {user.id !== "bf2af7e6-aeb5-4201-b96c-f93721083364" && (
                      <Button
                        variant={"ghost"}
                        className="text-red-500 hover:bg-red-200"
                        onClick={() => handleUpdateRole(user.id, "commom")}
                      >
                        <CircleXIcon size={14} />
                      </Button>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <hr />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Usuários</h3>
          <ul>
            {usersResponse?.map((user) => (
              <li key={user.id}>
                {user.role === "commom" && (
                  <div className="flex items-center justify-between">
                    <p className="text-xl">
                      <span>• </span>
                      {user.name}
                    </p>
                    <Button
                      variant={"ghost"}
                      className="text-green-500 hover:bg-green-200"
                      onClick={() => handleUpdateRole(user.id, "admin")}
                    >
                      <CircleCheckIcon size={14} />
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SheetContent>
  );
}
