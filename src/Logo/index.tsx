import Image from "next/image";
import React from "react";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

export default function Logo({ width, height, className }: LogoProps) {
  return (
    <Image
      className={`${className} block`}
      src="@/assets/logo.svg"
      width={width}
      height={height}
      alt="logo"
    />
  );
}
