import { useMutation } from "@tanstack/react-query";
import { registerUserSchema, RegisterUserSchema } from "./schema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useRegisterUser() {
  const navigate = useNavigate();

  const { mutateAsync: registerUserMutation } = useMutation({
    mutationFn: async (data: Omit<RegisterUserSchema, "id" | "role">) => {
      const parsedData = registerUserSchema.parse(data);
      await axios.post("http://localhost:3333/users", parsedData);
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  return registerUserMutation;
}
