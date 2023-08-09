// import Image from "next/image";
import Text, {TextProps} from "../Text";
import arrow from "../assets/arrow.svg?url";
import React from "react";

interface BreadcrumbProps {
  menu: string[];
  className?: string;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
}

export default function Breadcrumb({
  menu,
  className,
  textSize = "lg",
  textWeight = "semibold",
}: BreadcrumbProps) {
  return (
    <nav className={` ${className}`}>
      <ol className="list-none inline-flex">
        {menu.map((item, index) => (
          <li
            key={item}
            className={`flex items-center ${index !== 0 ? "mx-2" : ""}`}
          >
            {index !== 0 && (
               <img src={arrow} alt="breadcrumb_arrow_img" className="mx-2" />
            )}
            <Text
              size={textSize}
              weight={textWeight}
              className="text-Grayscale-80"
            >
              {item}
            </Text>
          </li>
        ))}
      </ol>
    </nav>
  );
}

