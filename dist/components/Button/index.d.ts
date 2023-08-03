import { ButtonHTMLAttributes } from "react";
import { TextProps } from "../Text";
import { ButtonVariant } from "./style";
export declare function getButtonStyles(variant: ButtonVariant, disabled: boolean, asChild: boolean): string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    disabled?: boolean;
    asChild?: boolean;
    variant?: ButtonVariant;
    textSize?: TextProps["size"];
    textWeight?: TextProps["weight"];
}
export default function Button({ className, variant, disabled, asChild, textSize, textWeight, text, ...props }: ButtonProps): import("react").JSX.Element;
