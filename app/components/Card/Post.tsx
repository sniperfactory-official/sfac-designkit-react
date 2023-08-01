import { twMerge } from "tailwind-merge";

interface PostProps {
  className?: string;
  children: React.ReactNode;
}

export default function Post({ className, children }: PostProps) {
  return (
    <div
      className={twMerge(
        className,
        `w-770 h-240 p-5 border-1 rounded-sm border-Grayscale-5`,
      )}
    >
      {children}
    </div>
  );
}
