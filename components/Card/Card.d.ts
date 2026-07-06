import * as React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    elevated?: boolean;
}
export declare function Card({ className, elevated, ...props }: CardProps): React.JSX.Element;
export declare function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element;
export declare function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
//# sourceMappingURL=Card.d.ts.map