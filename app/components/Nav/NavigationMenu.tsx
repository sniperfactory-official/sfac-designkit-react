"use client";

import { useState } from "react";
import Link from "next/link";
import Text from "../Text.tsx";

type NavMenuItemProps = {
  text: string;
  linkTo: string;
  className?: string;
};

export default function NavigationMenu({
  text,
  linkTo,
  className,
}: NavMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} list-none w-[115px] h-[40px] rounded-[10px] text-center py-[10px] text-Grayscale-100 hover:text-Primary-60 hover:bg-Primary-5 cursor-pointer`}
    >
      <Link href={linkTo}>
        <Text size="base" weight={isHovered ? "bold" : "medium"}>
          {text}
        </Text>
      </Link>
    </div>
  );
}
