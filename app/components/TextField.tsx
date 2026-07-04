"use client";

import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function TextField({
  label,
  required,
  id,
  className = "",
  ...props
}: TextFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="relative mt-6">
      <label
        htmlFor={inputId}
        className="absolute -top-2 left-3 z-10 bg-bg px-1 text-[13px] leading-[17px] text-primary"
      >
        {label}
        {required && <span className="text-required">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        className={`w-full rounded-md border border-border bg-transparent px-4 py-3.5 text-[14px] leading-[17px] text-text placeholder:text-muted focus:border-primary focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
