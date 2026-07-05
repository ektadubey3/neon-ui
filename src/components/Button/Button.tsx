import * as React from "react";
import { cn } from "../../utils/cn";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading = false, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("ds-button ds-focus-ring", `ds-button--${variant}`, `ds-button--${size}`, className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <span className="ds-button__spinner" aria-hidden="true" /> : null}
        <span className="ds-button__label">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
