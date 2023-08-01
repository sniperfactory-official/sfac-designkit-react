import { twMerge } from "tailwind-merge";

interface VerticalProps {
  className?: string;
  children: React.ReactNode;
}

export default function Vertical({ className, children }: VerticalProps) {
  return (
    <div
      className={twMerge(
        className,
        `w-245 h-145 p-20 mb-20 border-1 border-Grayscale-5`,
      )}
    >
      {children}
    </div>
  );
}
