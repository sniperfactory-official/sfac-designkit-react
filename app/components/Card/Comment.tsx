import { twMerge } from "tailwind-merge";

interface CommentProps {
  className?: string;
  children: React.ReactNode;
}

export default function Comment({ className, children }: CommentProps) {
  return (
    <div
      className={twMerge(
        `w-770 h-95 p-25 mb-15 border-1 border-Grayscale-5`,
        className,
      )}
    >
      {children}
    </div>
  );
}
