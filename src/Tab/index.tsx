import React from 'react';
import Text, { TextProps } from "../Text";

export type ButtonProps = {
  text: string;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
  active: boolean;
};
export default function Tab({
  text,
  textSize = "base",
  textWeight = "semibold",
  active = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`border-b-4 transition-colors duration-300 ${
        active ? "border-Primary-100 text-Primary-100" : "border-transparent"
      } w-[347px] text-center pt-[14px] pb-[17px]`}
      {...props}
    >
      <Text size={textSize} weight={textWeight}>
        {text}
      </Text>
    </button>
  );
}
