import { ReactNode } from "react";

export type TextProps = {
  className?: string;
  children: ReactNode;
  size?: "xl" | "lg" | "sm" | "xs" | "base";
  weight?: "bold" | "semibold" | "medium";
};

export default function Text({
  className = "",
  size = "base",
  weight = "medium",
  children,
}: TextProps) {
  const sizeConfig = {
    xl: "text-xl",
    xs: "text-xs",
    lg: "text-lg",
    sm: "text-sm",
    base: "text-base",
  };

  const weightConfig = {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
  };

  return (
    <span
      className={`${sizeConfig[size]} ${weightConfig[weight]} ${className}`}
    >
      {children}
    </span>
  );
}
