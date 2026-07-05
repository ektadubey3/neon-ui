import * as React from "react";
import { cn } from "../../utils/cn";
import "./Switch.css";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  hint?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, hint, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className="ds-switch">
        <div>
          <label className="ds-switch__label" htmlFor={inputId}>
            {label}
          </label>
          {hint ? <p className="ds-switch__hint">{hint}</p> : null}
        </div>
        <input ref={ref} id={inputId} type="checkbox" role="switch" className={cn("ds-switch__input", className)} {...props} />
        <label className="ds-switch__track" htmlFor={inputId} aria-hidden="true">
          <span className="ds-switch__thumb" />
        </label>
      </div>
    );
  }
);

Switch.displayName = "Switch";
