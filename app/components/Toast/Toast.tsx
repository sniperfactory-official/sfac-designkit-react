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
};

export default function Toast({
  title,
  text,
  type = "Simple",
  textSize = "xs",
  textWeight = "medium",
  titleSize = "sm",
  button = false,
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
      actionButton = "text-Primary-40 absolute right-5 top-[30px]";
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
      className={`relative w-[360px] shadow-toast rounded-[10px] border px-5 py-6 ${toastStyle}`}
    >
      {title && (
        <Title size={titleSize} className={titleStyle}>
          {title}
        </Title>
      )}
      <Text size={textSize} weight={textWeight}>
        {text}
      </Text>
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
  );
}
