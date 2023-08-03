import React from 'react';
import { TextProps } from "../Text";
export type ButtonProps = {
    text: string;
    textSize?: TextProps["size"];
    textWeight?: TextProps["weight"];
    active: boolean;
};
export default function Tab({ text, textSize, textWeight, active, ...props }: ButtonProps): React.JSX.Element;
