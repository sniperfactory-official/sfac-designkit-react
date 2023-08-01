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
        `w-245 h-235 p-5 border-1 rounded-sm border-Grayscale-5`,
      )}
    >
      {children}
    </div>
  );
}
