import Image from "next/image";
import Text from "@/app/components/Text.tsx";
import arrow from "@/app/assets/arrow.svg";

interface BreadcrumbItem {
  label: string;
}

interface BreadcrumbProps {
  menu: string[];
}

export default function Breadcrumb({ menu }: BreadcrumbProps) {
  const breadcrumbs: BreadcrumbItem[] = menu.map(label => ({ label }));

  return (
    <nav>
      <ol className="list-none inline-flex">
        {breadcrumbs.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index !== 0 && (
              <Image src={arrow} alt="breadcrumb_arrow_img" className="mx-2" />
            )}
            <Text size="lg" weight="semibold" className="text-Grayscale-80">
              {item.label}
            </Text>
          </li>
        ))}
      </ol>
    </nav>
  );
}