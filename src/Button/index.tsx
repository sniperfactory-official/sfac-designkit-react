"use client";

import React, { ButtonHTMLAttributes } from "react";
import Text, { TextProps } from "../Text";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "link"
  | "ghost";

export const variantsStyles: Record<ButtonVariant, string> = {
  primary: "bg-Primary-80 text-white",
  secondary: "bg-Grayscale-5 text-Grayscale-60",
  destructive: "bg-[#FF5757] text-white",
  outline: "bg-Primary-5 border border-Primary-40 text-Primary-80",
  link: "text-Primary-60 hover:underline underline-offset-4 decoration-2",
  ghost: "text-Primary-60 hover:bg-Primary-5",
};

export const buttonBasicStyle = "h-[35px] px-8 rounded-lg";
export const buttonStyle = "rounded-[10px] w-[35rem] py-4 justify-center";
export const disabledStyles = "text-Grayscale-20 bg-Grayscale-5";
export const asChildStyle = `${buttonBasicStyle} rounded-[7px] text-Grayscale-20 bg-Grayscale-5`;

export function getButtonStyles(
  variant: ButtonVariant,
  disabled: boolean,
  asChild: boolean,
): string {
  if (disabled && asChild) {
    return `${asChildStyle} ${disabledStyles}`;
  }
  if (disabled) {
    return `${buttonStyle} ${disabledStyles}`;
  }
  if (asChild) {
    return `${asChildStyle} ${variantsStyles[variant]}`;
  }
  return `${buttonStyle} ${variantsStyles[variant]}`;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  disabled?: boolean;
  asChild?: boolean;
  variant?: ButtonVariant;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
}

export default function Button({
  className = "",
  variant = "primary",
  disabled = false,
  asChild = false,
  textSize = "base",
  textWeight = "bold",
  text,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${getButtonStyles(variant, disabled, asChild)} ${className}`}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Text size={textSize} weight={textWeight}>
        {text}
      </Text>
    </button>
  );
}
