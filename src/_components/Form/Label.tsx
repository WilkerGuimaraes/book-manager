import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="flex justify-between font-semibold" {...props}></label>
  );
}
