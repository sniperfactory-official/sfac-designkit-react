import logo from "@/public/logo.svg";
import Image from "next/image";

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
