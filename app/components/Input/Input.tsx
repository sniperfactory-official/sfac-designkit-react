import React from "react";
import Text from "../Text";

export interface InputProps {
  type?: "text" | "password";
  onChangeInputText?: (value: string) => void;
  className?: string;
  placeholder?: string;
  label?: string;
  text?: string;
  textColor?: "red" | "blue" | "gray";
  labelColor?: "red" | "blue" | "gray";
}

export default function Input({
  type = "text",
  placeholder = "이메일 주소",
  label,
  text,
  className,
  textColor = "gray",
  labelColor = "blue",
  onChangeInputText,
}: InputProps) {
  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeInputText) {
      onChangeInputText(e.target.value);
    }
  };

  const textColorMapping = {
    red: "text-Meaningful-red",
    blue: "text-Primary-80",
    gray: "text-Grayscale-40",
  };

  return (
    <>
      <p className="ml-4">
        {/* <Text size="sm" weight="bold" className={`text-Primary-80 `}> */}
        <Text size="sm" weight="bold" className={textColorMapping[labelColor]}>
          {label}
        </Text>
      </p>
      <input
        type={type}
        id="Text"
        placeholder={placeholder}
        className={`bg-Grayscale-5 w-[422px] h-[48px] pr-4 pt-[10px] pl-4 pb-[10px] outline-none rounded-[10px] ${className}`}
        onChange={handleInputText}
      />
      <p className="ml-4">
        <Text size="xs" weight="medium" className={textColorMapping[textColor]}>
          {text}
        </Text>
      </p>
    </>
  );
}
