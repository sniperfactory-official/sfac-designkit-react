import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export default function Content({ children, className }: ContentProps) {
  return (
    <div
      className={`bg-Grayscale-5 rounded-lg text-Grayscale-60 p-5 ${className}`}
    >
      <p>{children}</p>
    </div>
  );
}
