import { twMerge } from "tailwind-merge";

interface CommentProps {
  className?: string;
  children: React.ReactNode;
}

export default function Comment({ className, children }: CommentProps) {
  return (
    <div
      className={twMerge(
        className,
        `w-770 h-95 p-5.125 border-1 rounded-sm border-Grayscale-5`,
      )}
    >
      {children}
    </div>
  );
}
