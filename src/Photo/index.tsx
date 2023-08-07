import { twMerge } from "tailwind-merge";
import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";
import defaultPhoto from "../assets/photocardDefault.svg?url";

export interface PhotoProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export default function Photo({ className, ...props }: PhotoProps) {
  return (
    <div
      className={twMerge(
        className,
        `box-border w-245 h-145 border-0 rounded-sm`,
      )}
    >
      <Image
        width={props.width ? Number(props.width) : 245}
        height={props.height ? Number(props.height) : 145}
        src={props.src ? props.src : defaultPhoto}
        alt={props.alt ? props.alt : ""}
      />
    </div>
  );
}
