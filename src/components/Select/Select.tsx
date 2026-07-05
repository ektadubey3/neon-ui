import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import "./Select.css";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, id, label, hint, error, options, placeholder, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const descriptionId = hint || error ? `${selectId}-description` : undefined;

    return (
      <div className="ds-field">
        <label className="ds-field__label" htmlFor={selectId}>
          {label}
        </label>
        <span className="ds-select__wrap">
          <select
            ref={ref}
            id={selectId}
            className={cn("ds-select ds-focus-ring", error && "ds-select--error", className)}
            aria-invalid={error ? true : undefined}
            aria-describedby={descriptionId}
            {...props}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" />
        </span>
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

Select.displayName = "Select";
