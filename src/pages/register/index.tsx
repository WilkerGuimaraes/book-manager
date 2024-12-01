import {
  RegisterUserSchema,
  registerUserSchema,
} from "@/_actions/register-user/schema";
import { useRegisterUser } from "@/_actions/register-user/use-register-user";
import { Form } from "@/_components/Form";
import { Button } from "@/_components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export function Register() {
  const registerUserForm = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const { handleSubmit } = registerUserForm;

  const registerUser = useRegisterUser();

  function handleRegisterUser(data: RegisterUserSchema) {
    registerUser(data);
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Cadastre-se</h1>
      <div className="flex min-w-[30vw] flex-col items-center justify-around rounded-md bg-white">
        <FormProvider {...registerUserForm}>
          <form
            onSubmit={handleSubmit(handleRegisterUser)}
            className="flex w-full flex-col gap-8 p-8"
          >
            <Form.Field>
              <Form.Label htmlFor="name">Nome:</Form.Label>
              <Form.Input type="text" name="name" id="name" />

              <Form.ErrorMessage field="name" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="email">E-mail:</Form.Label>
              <Form.Input type="email" name="email" id="email" />

              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="password">Senha:</Form.Label>
              <Form.Input type="password" name="password" id="password" />

              <Form.ErrorMessage field="password" />
            </Form.Field>

            <Button type="submit">Cadastrar</Button>
          </form>
        </FormProvider>

        <p className="mb-4">
          Já tem uma conta?{" "}
          <span className="font-semibold text-blue-500 hover:underline">
            <a href="/">Entrar</a>
          </span>
        </p>
      </div>
    </main>
  );
}
