"use client";

import { ButtonHTMLAttributes } from "react";
import Text, { TextProps } from "@/app/components/Text.tsx";
import {
  ButtonVariant,
  variantsStyles,
  buttonBasicStyle,
  buttonStyle,
} from "@/app/components/Button/style.tsx";

export function getButtonStyles(
  variant: ButtonVariant,
  disabled: boolean,
  asChild: boolean,
): string {
  const disabledStyles = "text-Grayscale-20 bg-Grayscale-5";
  const asChildStyle = `${buttonBasicStyle} ext-Grayscale-20 bg-Grayscale-5`;

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
  const buttonStyles = `${getButtonStyles(variant, disabled, asChild)}`;

  return (
    <button
      type="button"
      className={`${buttonStyles} ${className}`}
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
