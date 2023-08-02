import Text from "@/app/components/Text.tsx";
import Icon from "@/app/components/Icon/Icon";

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
              <Icon
                name="BreadArrow"
                className="mx-2 fill-Grayscale-40"
                width={7}
                height={10}
              />
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
