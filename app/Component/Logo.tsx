import logo from "@/public/logo.svg";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return <Image src={logo} width={width} height={height} alt="logo" />;
}
