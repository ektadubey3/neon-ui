import * as React from "react";
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
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Select.d.ts.map