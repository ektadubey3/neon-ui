import * as React from "react";
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    hint?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map