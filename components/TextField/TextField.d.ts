import * as React from "react";
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: string;
    error?: string;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextField.d.ts.map