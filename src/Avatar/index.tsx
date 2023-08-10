import React, { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import defaultImage from "../assets/avatarDefault.svg?url";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  src?: string;
  ring?: boolean;
  ringColor?: string;
  className?: string;
}

export default function Avatar({
  size = 45,
  src,
  ring = true,
  ringColor = "border-Grayscale-10",
  className = "",
  ...props
}: AvatarProps) {
  const ringClass = ring ? "ring-2" : "";
  return (
    <img 
      src={src ? src : defaultImage}
      className={twMerge(`rounded-full object-cover ${ringColor} ${ringClass}`, className)}
      width={size}
      height={size}
      alt={props.alt ? props.alt : ""}
    />
  );
}
