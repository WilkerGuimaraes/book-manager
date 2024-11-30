import { User } from "@/data/users";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUsers() {
  const { data: usersResponse } = useQuery<User[]>({
    queryKey: ["get-users"],
    queryFn: async () => {
      const response = await axios.get<User[]>("http://localhost:3333/users");

      return response.data;
    },
  });

  return { usersResponse };
}
