import React from "react";
export interface BadgeProps {
    children: string;
    color?: "Primary" | "Secondary" | "Outline" | "Destructive";
}
declare function Badge({ children, color }: BadgeProps): React.JSX.Element;
export default Badge;
