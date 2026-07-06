import * as React from "react";
export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}
export interface TabsProps {
    items: TabItem[];
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
}
export declare function Tabs({ items, defaultValue, value, onValueChange, className }: TabsProps): React.JSX.Element;
//# sourceMappingURL=Tabs.d.ts.map