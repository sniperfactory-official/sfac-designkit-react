import Text, { TextProps } from "@/app/components/Text.tsx";
import Title, { TitleProps } from "@/app/components/Title.tsx";

type ToastProps = {
  title?: string;
  text?: string;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
  titleSize?: TitleProps["size"];
  type?: "Simple" | "Success" | "Error" | "With Action" | "With title";
};

export default function Toast({
  title,
  text,
  type = "Simple",
  textSize = "xs",
  textWeight = "medium",
  titleSize = "sm",
}: ToastProps) {
  let toastStyle = "border-Grayscale-10 text-Grayscale-60";
  let actionButton = null;
  let titleStyle = "";

  switch (type) {
    case "Success":
      toastStyle = "text-Meaningful-green bg-[#F4FBF5] border-Meaningful-green";
      break;
    case "Error":
      toastStyle = "text-Meaningful-red bg-[#FCF5F5] border-Meaningful-red";
      break;
    case "With Action":
      actionButton = (
        <button type="button" className="block">
          button
        </button>
      );
      titleStyle = "block text-Grayscale-80";
      break;
    case "With title":
      titleStyle = "block text-Grayscale-80";
      break;
    default:
      break;
  }
  return (
    <div
      className={`w-[360px] shadow-toast rounded-[10px] border px-5 py-6 ${toastStyle}`}
    >
      {title && (
        <Title size={titleSize} className={titleStyle}>
          {title}
        </Title>
      )}
      <Text size={textSize} weight={textWeight}>
        {text}
      </Text>
      {actionButton}
    </div>
  );
}
