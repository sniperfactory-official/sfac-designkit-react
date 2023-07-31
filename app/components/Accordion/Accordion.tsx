"use client";

import { useState, SyntheticEvent, ReactNode } from "react";
import Content from "./Content.tsx";
import Title from "./Title.tsx";

type AccordionProps = {
  title: ReactNode;
  content: ReactNode;
};

export default function Accordion({ title, content }: AccordionProps) {
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
            {title}
          </Title>
          <Content>{content}</Content>
        </>
      ) : (
        <Title onClick={isClicked} className="transition-all">
          {title}
        </Title>
      )}
    </div>
  );
}
