"use client";

import { useState, SyntheticEvent } from "react";
import Content from "./Content.tsx";
import Title from "./Title.tsx";

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const isClicked = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(prev => !prev);
  };

  return (
    <div className="w-[34.375rem]">
      {clicked ? (
        <>
          <Title onClick={isClicked} className="rotate-90 transition-all">
            타이틀
          </Title>
          <Content>내용</Content>
        </>
      ) : (
        <Title onClick={isClicked} className="transition-all">
          타이틀
        </Title>
      )}
    </div>
  );
}
