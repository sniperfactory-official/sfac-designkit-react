import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg?url";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

export default function Logo({ width, height, className }: LogoProps) {
  return (
    <Image
      className={`${className} block`}
      src={logo}
      width={width}
      height={height}
      alt="logo"
    />
  );
}
