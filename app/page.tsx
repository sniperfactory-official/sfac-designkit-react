import Text from "@/app/components/Text.tsx";
import Title from "@/app/components/Title.tsx";
import Logo from "@/app/components/Logo.tsx";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb.tsx";

export default function Home() {
  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
      <Logo width={500} height={300} className="pl-8 bg-slate-500" />
      <Breadcrumb menu={["교육과정", "교육과정"]} />
    </>
  );
}
