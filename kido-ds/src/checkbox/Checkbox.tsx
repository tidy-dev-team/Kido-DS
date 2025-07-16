import React, { useEffect, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";

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
  count = "0",
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
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
          {showIcon && icon && <span className="text-gray-700">{icon}</span>}
          <span>{labelText}</span>
          {showCount && <span className="text-sm text-gray-500">({count})</span>}
        </div>
        {showDescription && description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
    );
  };

  return (
    <label className="flex row gap-1 cursor-pointer">
      <input
        type="checkbox"
        ref={setCheckboxRef}
        checked={type === CheckboxType.checked}
        onChange={handleChange}
        className="h-5 w-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      {renderLabel()}
    </label>
  );
};