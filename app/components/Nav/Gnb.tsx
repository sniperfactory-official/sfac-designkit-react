import NavigationMenu from "@/app/components/Nav/NavigationMenu.tsx";

interface NavProps {
  text: string;
  linkTo?: string;
  className?: string;
}

export default function Gnb({ text, linkTo, className }: NavProps) {
  return (
    <ul className="w-[115px] h-[70px] flex items-center ">
      <NavigationMenu text={text} linkTo={`/${linkTo}`} className={className} />
    </ul>
  );
}
