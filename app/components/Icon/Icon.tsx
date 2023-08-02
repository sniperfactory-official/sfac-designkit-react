import React, { HTMLAttributes } from "react";
import * as Icons from "./index";

export type IconName = keyof typeof Icons;
export const IconComponents = Icons;

interface IconProps extends HTMLAttributes<SVGElement> {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  width = 21,
  height = 21,
  name,
  className,
}: IconProps) {
  const IconComponent = Icons[name];

  return (
    <IconComponent
      width={width}
      height={height}
      className={`${className} fill-Grayscale-60`}
    />
  );
}
