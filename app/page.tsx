import Text from "@/app/components/Text.tsx";
import Title from "@/app/components/Title.tsx";
import Logo from "@/app/components/Logo.tsx";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
      <Logo width={500} height={300} className="pl-8 bg-slate-500" />
      <Card CardType="Assignment" className="mt-8">
        Assignment
      </Card>
      <Card CardType="AssignmentComment" className="mt-8">
        AssignmentComment
      </Card>
      <Card CardType="AssignmentList" className="mt-8">
        AssignmentList
      </Card>
      <Card CardType="Comment" className="mt-8">
        Comment
      </Card>
      <Card CardType="Content" className="mt-8">
        Content
      </Card>
      <Card CardType="Lecture" className="mt-8">
        Lecture
      </Card>
      <Card CardType="Post" className="mt-8">
        Post
      </Card>
      <Card CardType="Vertical" className="mt-8">
        Vertical
      </Card>
    </>
  );
}
