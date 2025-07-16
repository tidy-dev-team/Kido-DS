import React, { useEffect, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import "./Checkbox.css";

export const CheckboxState = {
  Unchecked: "unchecked",
  Indeterminate: "indeterminate",
  Checked: "checked",
} as const;

export type CheckboxState = (typeof CheckboxState)[keyof typeof CheckboxState];

interface CheckboxProps {
  state: CheckboxState;
  onChange: (newState: CheckboxState) => void;
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
  state,
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
      checkboxRef.indeterminate = state === CheckboxState.Indeterminate;
    }
  }, [checkboxRef, state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (state === CheckboxState.Unchecked) {
      onChange(CheckboxState.Checked);
    } else if (state === CheckboxState.Checked) {
      onChange(CheckboxState.Indeterminate);
    } else {
      onChange(CheckboxState.Unchecked);
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
        checked={state === CheckboxState.Checked}
        onChange={handleChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom" />
      {renderLabel()}
    </label>
  );
};