import { twMerge } from "tailwind-merge";

interface LectureProps {
  className?: string;
  children: React.ReactNode;
}

export default function Lecture({ className, children }: LectureProps) {
  return (
    <div
      className={twMerge(
        className,
        `w-770 h-172 p-20 mb-20 border-1 border-Grayscale-5`,
      )}
    >
      {children}
    </div>
  );
}
