"use client";

import { ButtonHTMLAttributes } from "react";
import Text, { TextProps } from "../Text/Text";
import {
  ButtonVariant,
  variantsStyles,
  buttonStyle,
  disabledStyles,
  asChildStyle,
} from "../Button/style";

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
