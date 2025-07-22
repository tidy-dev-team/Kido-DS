//test
import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

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

  const handleChange = () => {
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
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center gap-1 text-gray-900">
          {showIcon && icon && <span className="h-5 w-5 flex items-center justify-center text-gray-600 *:h-5 *:w-5">{icon}</span>}
          <span>{labelText}</span>
          {showCount && <span className="text-gray-600">({count})</span>}
        </div>
        {showDescription && description && (
          <p className="text-sm text-gray-600 pl-6">{description}</p>
        )}
      </div>
    );
  };

  return (
    <label className="flex row gap-5 cursor-pointer text-base">
      <input
        type="checkbox"
        ref={setCheckboxRef}
        checked={type === CheckboxType.checked}
        onChange={handleChange}
        className="h-4 w-4 m-2 accent-indigo-500 border-gray-300 rounded focus:ring-indigo-600"
      />
      {renderLabel()}
    </label>
  );
};
