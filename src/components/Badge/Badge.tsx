import * as React from "react";
import { cn } from "../../utils/cn";
import "./Badge.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "brand" | "success" | "warning" | "danger";
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return <span className={cn("ds-badge", `ds-badge--${tone}`, className)} {...props} />;
}
