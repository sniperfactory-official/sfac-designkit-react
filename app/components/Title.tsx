import { ReactNode } from "react";

type TitleProps = {
  className?: string;
  children: ReactNode;
  size: "xl" | "2xl" | "3xl" | "4xl";
};

export default function Title({ className = "", size, children }: TitleProps) {
  const sizeConfig = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };
  return (
    <p className={`font-bold ${sizeConfig[size]} ${className}`}>{children}</p>
  );
}
