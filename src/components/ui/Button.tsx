"use client";

import { forwardRef, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "outline-yellow"
    | "outline-green"
    | "rounded";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      onClick = () => {},
      type = "button",
      disabled = false,
      rounded = false,
      fullWidth = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary:
        "bg-[#0B9444] hover:bg-[#0A7A3A] text-white focus:ring-[#0B9444]",
      secondary:
        "bg-[#F5B502] hover:bg-[#E5A502] text-white focus:ring-[#F5B502]",
      outline:
        "border border-[#0B9444] text-[#0B9444] hover:bg-[#0B9444] hover:text-white focus:ring-[#0B9444]",
      "outline-yellow":
        "border border-[#F5B502] text-[#F5B502] hover:bg-[#F5B502] hover:text-white focus:ring-[#F5B502]",
      "outline-green":
        "border border-[#0B9444] text-[#0B9444] hover:bg-[#0B9444] hover:text-white focus:ring-[#0B9444]",
      rounded:
        "bg-[#0B9444] hover:bg-[#0A7A3A] text-white focus:ring-[#0B9444] rounded-full",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const shape = rounded ? "rounded-full" : "rounded-md";
    const width = fullWidth ? "w-full" : "";
    const cursorClass =
      disabled || loading ? "cursor-not-allowed opacity-60" : "cursor-pointer";

    const classes = [
      baseClasses,
      variants[variant],
      sizes[size],
      shape,
      width,
      cursorClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        onClick={onClick}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

export { Button };
