import { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <nav className="flex items-center align-middle m-auto">{children}</nav>
  );
}
