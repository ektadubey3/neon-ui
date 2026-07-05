import * as React from "react";
import { cn } from "../../utils/cn";
import "./Tooltip.css";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: "top" | "bottom";
}

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  const id = React.useId();
  const child = React.cloneElement(children, {
    "aria-describedby": id
  } as React.HTMLAttributes<HTMLElement>);

  return (
    <span className={cn("ds-tooltip", `ds-tooltip--${side}`)}>
      {child}
      <span className="ds-tooltip__content" role="tooltip" id={id}>
        {content}
      </span>
    </span>
  );
}
