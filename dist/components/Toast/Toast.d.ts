/// <reference types="react" />
import { TextProps } from "../Text";
import { TitleProps } from "../Title";
type ToastProps = {
    title?: string;
    text?: string;
    textSize?: TextProps["size"];
    textWeight?: TextProps["weight"];
    titleSize?: TitleProps["size"];
    button?: boolean;
    type?: "Simple" | "Success" | "Error" | "With Action" | "With Title";
};
export default function Toast({ title, text, type, textSize, textWeight, titleSize, button, }: ToastProps): import("react").JSX.Element;
export {};
