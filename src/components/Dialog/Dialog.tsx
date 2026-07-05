import * as React from "react";
import { X } from "lucide-react";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { cn } from "../../utils/cn";
import "./Dialog.css";

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

export function Dialog({
  open,
  title,
  description,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onClose,
  onConfirm
}: DialogProps) {
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ds-dialog__overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="ds-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="ds-dialog__header">
          <div>
            <h2 className="ds-dialog__title" id={titleId}>
              {title}
            </h2>
            {description ? (
              <p className="ds-dialog__description" id={descriptionId}>
                {description}
              </p>
            ) : null}
          </div>
          <IconButton label="Close dialog" onClick={onClose}>
            <X />
          </IconButton>
        </header>
        {children ? <div className="ds-dialog__body">{children}</div> : null}
        <footer className="ds-dialog__footer">
          <Button variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          {onConfirm ? <Button onClick={onConfirm}>{confirmLabel}</Button> : null}
        </footer>
      </section>
    </div>
  );
}

export interface DialogDemoProps {
  buttonLabel?: string;
}

export function DialogDemo({ buttonLabel = "Open dialog" }: DialogDemoProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={cn("ds-dialog-demo")}>
      <Button onClick={() => setOpen(true)}>{buttonLabel}</Button>
      <Dialog
        open={open}
        title="Invite teammate"
        description="Send an invitation to your workspace."
        confirmLabel="Send invite"
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      >
        <p>Use this pattern for confirmations, focused forms, and destructive actions.</p>
      </Dialog>
    </div>
  );
}
