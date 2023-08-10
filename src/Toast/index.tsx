import { twMerge } from "tailwind-merge";
import React from "react";
import Text, { TextProps } from "../Text";
import Title, { TitleProps } from "../Title";
import Button from "../Button";

export type ToastProps = {
  title?: string;
  text?: string;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
  titleSize?: TitleProps["size"];
  button?: boolean;
  type?: "Simple" | "Success" | "Error" | "With Action" | "With Title";
  className?: string;
};

export default function Toast({
  title,
  text,
  type = "Simple",
  textSize = "xs",
  textWeight = "medium",
  titleSize = "sm",
  button = false,
  className = "",
}: ToastProps) {
  let toastStyle = "border-Grayscale-10 text-Grayscale-60";
  let actionButton = "";
  let titleStyle = "";

  switch (type) {
    case "Success":
      toastStyle = "text-Meaningful-green bg-[#F4FBF5] border-Meaningful-green";
      break;
    case "Error":
      toastStyle = "text-Meaningful-red bg-[#FCF5F5] border-Meaningful-red";
      break;
    case "With Action":
      actionButton = "text-Primary-40 w-[88px]";
      titleStyle = "block text-Grayscale-80";
      break;
    case "With Title":
      titleStyle = "block text-Grayscale-80";
      break;
    default:
      break;
  }
  return (
    <div
      className={twMerge(
        `w-[360px] flex break-all shadow-toast rounded-[10px] border px-5 py-4 tracking-[-0.02rem] ${toastStyle}`,
        className,
      )}
    >
      <div>
        {title && (
          <Title size={titleSize} className={titleStyle}>
            {title}
          </Title>
        )}
        <Text size={textSize} weight={textWeight}>
          {text}
        </Text>
      </div>
      <div
        className={`${
          type === "With Action" ? "ml-[35px]" : ""
        } flex items-center`}
      >
        {button && (
          <Button
            text="확인"
            variant="outline"
            asChild
            className={actionButton}
            textSize="sm"
            textWeight="semibold"
          />
        )}
      </div>
    </div>
  );
}
