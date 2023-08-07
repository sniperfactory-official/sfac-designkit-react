import React, { useState, ReactNode } from "react";
import Icon, { IconName } from "../Icon/Icon";
import Text from "../Text";

type SelectProps = {
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
  className,
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
      className={`w-[245px] px-[20px] ${buttonBaseStyle} ${className} ${
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
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.49951 7L4.64208 9.39925C5.03847 9.84313 5.73243 9.84469 6.13082 9.40261L10.9995 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
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
