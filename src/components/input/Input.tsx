"use client";

import { forwardRef, ReactNode } from "react";

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
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
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
      icon,
      ...props
    },
    ref
  ) => {
    const baseClasses = `flex-grow px-4 py-3 text-base appearance-none focus:outline-none w-full ${
      rounded ? "rounded-full" : "rounded-md"
    }`;

    const variants = {
      "primary-outline":
        "border border-green-500 bg-transparent text-white placeholder-white/70",
      "secondary-outline":
        "border border-yellow-500 bg-transparent text-white placeholder-white/70",
    };

    const inputClasses = [baseClasses, variants[variant], className]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="w-full relative">
        {label && (
          <label
            htmlFor={id || name}
            className="block text-sm font-medium text-white mb-1"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        {icon ? (
          <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70">
              {icon}
            </div>
            <input
              ref={ref}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              className={`pl-12 ${inputClasses}`}
              required={required}
              name={name}
              id={id || name}
              {...props}
            />
          </div>
        ) : (
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
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
