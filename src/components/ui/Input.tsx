"use client";

import { forwardRef } from "react";

interface InputProps {
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  value?: string;
  onChange?: (value: string) => void;
  variant?: "primary-outline" | "secondary-outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  required?: boolean;
  name?: string;
  id?: string;
  rounded?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type = "text",
      value,
      onChange,
      variant = "primary-outline",
      size = "md",
      className = "",
      label,
      required = false,
      name,
      id,
      rounded = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "flex-grow px-6 py-3 rounded-full focus:outline-none  text-base appearance-none ";

    const variants = {
      "primary-outline": "border border-green-500  bg-transparent text-white",
      "secondary-outline": "border border-yellow-500 bg-transparent text-white",
    };

    const cursorClass = "cursor-text";

    const inputClasses = [
      baseClasses,
      variants[variant],
      cursorClass,
      "w-full",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id || name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={inputClasses}
          required={required}
          name={name}
          id={id || name}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
