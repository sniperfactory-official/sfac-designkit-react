// eslint-disable-next-line import/no-extraneous-dependencies
import { twMerge } from "tailwind-merge";
import Text, { TextProps } from "@/app/components/Text.tsx";
import Title, { TitleProps } from "@/app/components/Title.tsx";
import Button from "@/app/components/Button/Button";

type ToastProps = {
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
  const textStyle = "";

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
      <div className="w-auto">
        {title && (
          <Title size={titleSize} className={titleStyle}>
            {title}
          </Title>
        )}
        <Text size={textSize} weight={textWeight} className={textStyle}>
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
