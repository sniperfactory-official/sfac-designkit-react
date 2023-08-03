import React from "react";

interface BadgeProps {
  children: string;
  color?: "Primary" | "Secondary" | "Outline" | "Destructive";
}

function Badge({ children, color = "Primary" }: BadgeProps) {
  let badgeStyle = "bg-Primary-80 text-white";

  switch (color) {
    case "Secondary":
      badgeStyle = "bg-Grayscale-5 text-Grayscale-60";
      break;
    case "Outline":
      badgeStyle = "bg-Primary-5 text-Primary-40 border border-Primary-40";
      break;
    case "Destructive":
      badgeStyle = "bg-[#ff5757] text-white";
      break;
    default:
      break;
  }

  return (
    <span
      className={`W-14 h-5 rounded pt-1 pr-2.5 pl-2.5 pb-1 gap-2 font-semibold text-[10px] ${badgeStyle}`}
    >
      {children}
    </span>
  );
}

export default Badge;
