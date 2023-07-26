import Text from "@/app/Component/Text.tsx";
import Title from "@/app/Component/Title.tsx";
import Logo from "@/app/Component/Logo.tsx";

export default function Home() {
  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
      <Logo width={500} height={300} />
    </>
  );
}
