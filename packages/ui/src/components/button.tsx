
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "default"
  | "danger"
  | "success"
  | "ghost";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  };

const baseClasses = `
  rounded
  border
  px-2
  py-1
  text-xs
  cursor-pointer
  disabled:cursor-not-allowed
  disabled:opacity-40
`;

const variantClasses: Record<
  ButtonVariant,
  string
> = {
  default: `
    hover:bg-muted
  `,

  danger: `
    border-red-300
    text-red-600
    hover:bg-red-50
  `,
  success: `
    border-green-300
    text-green-600
    hover:bg-green-50
  `,

  ghost: `
    border-transparent
    hover:bg-muted
  `,

};

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${className}
      `}
    />
  );
}

/*
Examples

type ButtonVariant =
  | "default"
  | "secondary"
  | "danger"
  | "success"
  | "ghost";


<Button variant="success">
  Create Product
</Button>

<Button variant="secondary">
  Cancel
</Button>

<Button variant="ghost">
  Edit
</Button>

<Button variant="danger">
  Delete
</Button>

*/