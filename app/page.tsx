import Text from "./Component/Text.tsx";
import Title from "./Component/Title.tsx";

export default function Home() {
  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
    </>
  );
}
