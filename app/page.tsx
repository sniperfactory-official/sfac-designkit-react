import Text from "@/app/components/Text.tsx";
import Title from "@/app/components/Title.tsx";
import Logo from "@/app/components/Logo.tsx";
import Card from "@/app/components/Card/Card.tsx";

export default function Home() {
  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
      <Logo width={500} height={300} className="pl-8 bg-slate-500" />
      <Card CardType="Comment" className="ml-4 mt-4">
        가나다
      </Card>
      <Card CardType="Lecture" className="ml-4 mt-4 font-bold">
        가나다
      </Card>
      <Card CardType="Post" className="ml-4 mt-4">
        가나다
      </Card>
      <Card CardType="Vertical" className="ml-4 mt-4">
        가나다
      </Card>
      <Card CardType="Photo" className="ml-4 mt-4">
        가나다
      </Card>
      <Card CardType="Content" className="ml-4 mt-4">
        가나다
      </Card>
    </>
  );
}
