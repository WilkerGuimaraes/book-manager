import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UpdateUserSchema } from "./schema";
import { queryClient } from "@/_lib/react-query";

export function useUpdateUser() {
  const { mutateAsync: updateUserMutation } = useMutation({
    mutationFn: async ({ id, role }: UpdateUserSchema) => {
      const response = await axios.patch(`http://localhost:3333/users/${id}`, {
        role,
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-users"],
      });
    },
  });

  return updateUserMutation;
}
