"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const base =
    "w-full rounded-md py-3.5 text-[16px] font-medium leading-[17px] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

  const variants: Record<ButtonVariant, string> = {
    primary: disabled
      ? "bg-disabled text-white cursor-not-allowed"
      : "bg-primary text-white hover:bg-primary-hover cursor-pointer",
    light: "bg-primary-light text-text hover:opacity-90 cursor-pointer",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
