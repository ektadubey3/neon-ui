import * as React from "react";
import { cn } from "../../utils/cn";
import "./IconButton.css";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "plain" | "outlined" | "filled";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, label, size = "md", variant = "plain", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn("ds-icon-button ds-focus-ring", `ds-icon-button--${size}`, `ds-icon-button--${variant}`, className)}
        aria-label={label}
        title={label}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
