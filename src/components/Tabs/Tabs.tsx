import * as React from "react";
import { cn } from "../../utils/cn";
import "./Tabs.css";

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

export function Tabs({ items, defaultValue, value, onValueChange, className }: TabsProps) {
  const firstId = items[0]?.id;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? firstId);
  const activeValue = value ?? internalValue;

  const selectTab = (id: string) => {
    setInternalValue(id);
    onValueChange?.(id);
  };

  return (
    <div className={cn("ds-tabs", className)}>
      <div className="ds-tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            className="ds-tabs__trigger ds-focus-ring"
            aria-selected={activeValue === item.id}
            aria-controls={`${item.id}-panel`}
            id={`${item.id}-tab`}
            onClick={() => selectTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${item.id}-panel`}
          aria-labelledby={`${item.id}-tab`}
          hidden={activeValue !== item.id}
          className="ds-tabs__panel"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
