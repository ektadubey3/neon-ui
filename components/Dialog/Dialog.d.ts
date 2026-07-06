import * as React from "react";
export interface DialogProps {
    open: boolean;
    title: string;
    description?: string;
    children?: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    onClose: () => void;
    onConfirm?: () => void;
}
export declare function Dialog({ open, title, description, children, confirmLabel, cancelLabel, onClose, onConfirm }: DialogProps): React.JSX.Element | null;
export interface DialogDemoProps {
    buttonLabel?: string;
}
export declare function DialogDemo({ buttonLabel }: DialogDemoProps): React.JSX.Element;
//# sourceMappingURL=Dialog.d.ts.map