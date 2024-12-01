import { useFormContext } from "react-hook-form";

interface ErrorMessageProps {
  field: string;
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) return null;

  return (
    <span className="mt-1 text-sm text-red-500">
      {fieldError.message?.toString()}
    </span>
  );
}
