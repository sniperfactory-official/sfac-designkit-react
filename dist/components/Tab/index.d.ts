/// <reference types="react" />
import { TextProps } from "../Text";
type ButtonProps = {
    text: string;
    textSize?: TextProps["size"];
    textWeight?: TextProps["weight"];
    active: boolean;
};
export default function Tab({ text, textSize, textWeight, active, ...props }: ButtonProps): import("react").JSX.Element;
export {};
