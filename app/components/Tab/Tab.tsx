"use client";

import { useState } from "react";
import Text, { TextProps } from "@/app/components/Text.tsx";

type ButtonProps = {
  text: string;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
};
export default function Tab({
  text,
  textSize = "base",
  textWeight = "semibold",
}: ButtonProps) {
  const [activeTab, setActiveTab] = useState(false);

  const isActiveTab = () => {
    setActiveTab(prev => !prev);
  };

  return (
    <button
      type="button"
      onClick={isActiveTab}
      className={`border-b-4 transition-colors duration-300 ${
        activeTab ? "border-Primary-100 text-Primary-100" : "border-transparent"
      } w-[347px] text-center pt-[14px] pb-[17px]`}
    >
      <Text size={textSize} weight={textWeight}>
        {text}
      </Text>
    </button>
  );
}
