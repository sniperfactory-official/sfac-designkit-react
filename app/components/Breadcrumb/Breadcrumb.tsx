import Image from "next/image";
import Text, { TextProps } from "@/app/components/Text.tsx";
import arrow from "@/app/assets/arrow.svg";
import Text from "@/app/components/Text.tsx";
import Icon from "@/app/components/Icon/Icon";


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
              <Image src={arrow} alt="breadcrumb_arrow_img" className="mr-2" />
              <Icon
                name="BreadArrow"
                className="mx-2 !fill-Grayscale-40"
                width={7}
                height={10}
              />
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
