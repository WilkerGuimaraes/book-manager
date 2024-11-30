import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ className, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className={twMerge(
        "h-10 rounded bg-zinc-100 px-3 text-black outline-none",
        className,
      )}
      {...register(props.name)}
      {...props}
    />
  );
}
