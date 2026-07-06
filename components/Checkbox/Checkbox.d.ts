import * as React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    hint?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map