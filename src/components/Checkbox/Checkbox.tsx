import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import "./Checkbox.css";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, hint, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className="ds-checkbox">
        <input ref={ref} id={inputId} type="checkbox" className={cn("ds-checkbox__input", className)} {...props} />
        <label className="ds-checkbox__label" htmlFor={inputId}>
          <span className="ds-checkbox__box" aria-hidden="true">
            <Check />
          </span>
          <span className="ds-checkbox__copy">
            <span className="ds-checkbox__text">{label}</span>
            {hint ? <span className="ds-checkbox__hint">{hint}</span> : null}
          </span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
