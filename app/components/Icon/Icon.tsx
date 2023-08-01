import React, { HTMLAttributes } from "react";
import * as Icons from "./index";

export type IconName = keyof typeof Icons;
export const IconComponents = Icons;

interface IconProps extends HTMLAttributes<SVGElement> {
  size?: number;
  name: IconName;
  className?: string;
}

export default function Icon({ size = 21, name, className }: IconProps) {
  const IconComponent = IconComponents[name];
  return <IconComponent width={size} height={size} className={className} />;
}
