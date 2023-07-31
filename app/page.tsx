"use client";

import Text from "@/app/components/Text.tsx";
import Title from "@/app/components/Title.tsx";
import Logo from "@/app/components/Logo.tsx";
import Button from "./components/Button/Button.tsx";

export default function Home() {
  const onClick = () => {
    // eslint-disable-next-line no-console
    console.log("123");
  };

  return (
    <>
      <Title size="4xl">제목</Title>
      <Text size="xs" weight="semibold">
        안녕하세요
      </Text>
      <Logo width={500} height={300} className="pl-8 bg-slate-500" />
      <Button
        variant="primary"
        text="로그인"
        onClick={onClick}
        disabled
        asChild
      />
    </>
  );
}
