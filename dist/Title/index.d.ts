import React, { ReactNode } from "react";
export type TitleProps = {
    className?: string;
    children: ReactNode;
    size: "sm" | "xl" | "2xl" | "3xl" | "4xl";
};
export default function Title({ className, size, children }: TitleProps): React.JSX.Element;
