import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: "neutral" | "brand" | "success" | "warning" | "danger";
}
export declare function Badge({ className, tone, ...props }: BadgeProps): React.JSX.Element;
//# sourceMappingURL=Badge.d.ts.map