import { twMerge } from "tailwind-merge";
import Image from "next/image";
import React, { ImgHTMLAttributes } from "react";
import defaultImage from "../assets/avatarDefault.svg?url";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  src?: string;
  border?: boolean;
  borderColor?: string;
  className?: string;
}

export default function Avatar({
  size = 34,
  src,
  border = true,
  borderColor = "border-Grayscale-10",
  className = "",
  ...props
}: AvatarProps) {
  return (
    <div className={twMerge(`p-0`, className)}>
      <Image
        src={src ? `${src}` : defaultImage}
        width={size}
        height={size}
        alt={props.alt ? props.alt : ""}
        className={`rounded-circle ${border ? `border-2` : ``} ${borderColor}`}
      />
    </div>
  );
}
