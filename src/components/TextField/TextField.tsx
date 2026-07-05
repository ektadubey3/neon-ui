import * as React from "react";
import { cn } from "../../utils/cn";
import "./TextField.css";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, id, label, hint, error, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const descriptionId = hint || error ? `${inputId}-description` : undefined;

    return (
      <div className="ds-field">
        <label className="ds-field__label" htmlFor={inputId}>
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn("ds-text-field ds-focus-ring", error && "ds-text-field--error", className)}
          aria-invalid={error ? true : undefined}
          aria-describedby={descriptionId}
          {...props}
        />
        {error ? (
          <p className="ds-field__message ds-field__message--error" id={descriptionId}>
            {error}
          </p>
        ) : hint ? (
          <p className="ds-field__message" id={descriptionId}>
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
