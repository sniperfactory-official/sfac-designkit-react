"use client";

import React, { useState, ReactNode } from "react";
import Icon, { IconName } from "../Icon/Icon";
import Check from "../../../public/check.svg";
import Text from "../Text";

export type SelectProps = {
  mode: "Main" | "Sub";
  children?: ReactNode;
  className?: string;
  checkbox?: boolean;
  icon?: IconName;
  active?: boolean;
};

export default function Select({
  mode,
  children,
  className = "w-[245px]",
  checkbox = false,
  active = false,
  icon,
  ...props
}: SelectProps) {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);

  const buttonBaseStyle =
    "h-[46px] outline-none border-none rounded-[10px] flex items-center";

  const isMainMode = mode === "Main";
  const focusStyle = isMainMode ? "bg-Primary-5" : "text-Primary-80";
  const textClassName = isMainMode ? "base" : "sm";

  const handleClick = () => {
    setClicked(!clicked);
    if (checkbox && mode === "Sub") {
      setChecked(!checked);
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const uniqueId = Math.random().toString(36).substring(2);
  return (
    <button
      type="button"
      className={`px-[20px] ${buttonBaseStyle} ${className} ${
        clicked || active ? focusStyle : "text-Grayscale-80"
      }`}
      onClick={handleClick}
      {...props}
    >
      <div className="flex items-center">
        {isMainMode && icon && <Icon name={icon} />}
        {mode === "Sub" && checkbox && (
          <label
            htmlFor="cb1"
            className={`w-[15px] h-[15px] border border-Primary-30 ${
              clicked || active ? "bg-Primary-30" : ""
            } rounded-[3px]`}
          >
            {checked ? (
              <Check />
            ) : (
              <input
                type="checkbox"
                checked={checked}
                id={uniqueId}
                onChange={handleCheckboxChange}
                className="appearance-none indeterminate:bg-gray-300"
              />
            )}
          </label>
        )}
        <Text size={textClassName} weight="medium" className="ml-[15px]">
          {children}
        </Text>
      </div>
    </button>
  );
}
