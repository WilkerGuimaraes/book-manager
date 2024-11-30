import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginUserSchema } from "./schema";
import { useNavigate } from "react-router-dom";

export function useLoginUser() {
  const navigate = useNavigate();

  const { mutateAsync: loginUserMutation } = useMutation({
    mutationFn: async ({ email, password }: LoginUserSchema) => {
      const { data } = await axios.get(
        `http://localhost:3333/users?email=${email}`,
      );

      if (data.length === 0) {
        throw new Error("Usuário não encontrado.");
      }

      const user = data[0];
      if (user.password !== password) {
        throw new Error("Senha incorreta.");
      }

      return user;
    },
    onSuccess: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/books");
    },
  });

  return loginUserMutation;
}
