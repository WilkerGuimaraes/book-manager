import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ className, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[props.name];

  if (!props.name) {
    throw new Error("The 'name' prop is required for the Input component.");
  }

  return (
    <input
      id={props.id || props.name}
      aria-invalid={!!fieldError}
      className={twMerge(
        "h-10 rounded bg-zinc-100 px-3 text-black outline-none",
        fieldError ? "border border-red-500" : "border border-transparent",
        className,
      )}
      {...register(props.name)}
      {...props}
    />
  );
}
