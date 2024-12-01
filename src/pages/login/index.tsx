import { LoginUserSchema, loginUserSchema } from "@/_actions/login-user/schema";
import { useLoginUser } from "@/_actions/login-user/use-login-user";
import { Form } from "@/_components/Form";
import { Button } from "@/_components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export function Login() {
  const createUserForm = useForm<LoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  const { handleSubmit } = createUserForm;

  const loginUser = useLoginUser();

  function handleLoginUser({ email, password }: LoginUserSchema) {
    loginUser({ email, password });
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="flex min-h-[400px] min-w-[30vw] flex-col items-center justify-between rounded-md bg-white">
        <FormProvider {...createUserForm}>
          <form
            onSubmit={handleSubmit(handleLoginUser)}
            className="flex w-full flex-col gap-8 p-8"
          >
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

            <Button type="submit">Entrar</Button>
          </form>
        </FormProvider>

        <p className="mb-6">
          Não tem uma conta?{" "}
          <span className="font-semibold text-blue-500 hover:underline">
            <a href="/register">Cadastre-se</a>
          </span>
        </p>
      </div>
    </main>
  );
}
