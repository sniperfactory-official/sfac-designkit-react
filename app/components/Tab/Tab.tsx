"use client";

import Text, { TextProps } from "@/app/components/Text.tsx";

type ButtonProps = {
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
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`border-b-4 transition-colors duration-300 ${
        active ? "border-Primary-100 text-Primary-100" : "border-transparent"
      } w-[347px] text-center pt-[14px] pb-[17px]`}
    >
      <Text size={textSize} weight={textWeight}>
        {text}
      </Text>
    </button>
  );
}
