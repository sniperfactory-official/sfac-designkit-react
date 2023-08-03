import { ReactNode } from "react";
export type TextProps = {
    className?: string;
    children: ReactNode;
    size: "xl" | "lg" | "sm" | "xs" | "base";
    weight: "bold" | "semibold" | "medium";
};
export default function Text({ className, size, weight, children, }: TextProps): import("react").JSX.Element;
