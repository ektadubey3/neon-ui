import * as React from "react";
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size?: "sm" | "md" | "lg";
    variant?: "plain" | "outlined" | "filled";
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=IconButton.d.ts.map