import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: GridProps) {
  return (
    <div
      className={`w-[1024px] container m-auto grid gap-base grid-flow-row-dense ${className}`}
    >
      {children}
    </div>
  );
}
