import React, { useEffect, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import "./Checkbox.css";

export const CheckboxType = {
  unchecked: "unchecked",
  indeterminate: "indeterminate",
  checked: "checked",
} as const;

export type CheckboxType = (typeof CheckboxType)[keyof typeof CheckboxType];

interface CheckboxProps {
  type: CheckboxType;
  onChange: (newselectionType: CheckboxType) => void;
  showLabel?: boolean;
  labelText?: string;
  showCount?: boolean;
  count?: string;
  showDescription?: boolean;
  description?: string;
  showIcon?: boolean;
  icon?: ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  type,
  onChange,
  showLabel = false,
  labelText = "",
  showCount = false,
  count = 0,
  showDescription = false,
  description = "",
  showIcon = false,
  icon = null,
}) => {
  const [checkboxRef, setCheckboxRef] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef) {
      checkboxRef.indeterminate = type === CheckboxType.indeterminate;
    }
  }, [checkboxRef, type]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === CheckboxType.unchecked) {
      onChange(CheckboxType.checked);
    } else if (type === CheckboxType.checked) {
      onChange(CheckboxType.indeterminate);
    } else {
      onChange(CheckboxType.unchecked);
    }
  };

  const renderLabel = () => {
    if (!showLabel) return null;

    return (
      <div className="checkbox-label">
        {showIcon && icon && <span className="checkbox-icon">{icon}</span>}
        <span className="checkbox-text">{labelText}</span>
        {showCount && typeof count === "string" && (
          <span className="checkbox-count">({count})</span>
        )}
        {showDescription && description && (
          <div className="checkbox-description">{description}</div>
        )}
      </div>
    );
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        ref={setCheckboxRef}
        checked={type === CheckboxType.checked}
        onChange={handleChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom" />
      {renderLabel()}
    </label>
  );
};