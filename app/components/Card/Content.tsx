import { twMerge } from "tailwind-merge";

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

export default function Content({ className, children }: ContentProps) {
  return (
    <div className={twMerge(className, `w-770 h-240 p-5 border-0 rounded-sm`)}>
      {children}
    </div>
  );
}