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
        `w-770 h-240 p-20 mb-20 border-1 border-Grayscale-5`,
      )}
    >
      {children}
    </div>
  );
}
