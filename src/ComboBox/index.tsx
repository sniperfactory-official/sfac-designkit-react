"use client";

import React, { useState, Children, ReactNode, SyntheticEvent } from "react";
import Icon, { IconnameProps } from "../Icon";
import Text from "../Text";

interface ComboBoxProps {
  text: string;
  icon: IconnameProps;
  children: ReactNode;
}
export default function ComboBox({
  text,
  icon,
  children,
  ...props
}: ComboBoxProps) {
  const [clicked, setClicked] = useState(false);

  const isClicked = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(prev => !prev);
  };

  return (
    <div className="ComboBox">
      <button
        onClick={isClicked}
        className="flex justify-between w-[245px] h-[40px] border justify-items-start items-center px-[10px] rounded-[10px]"
        type="button"
        {...props}
      >
        <Text size="base" weight="medium" className="text-Grayscale-40">
          {text}
        </Text>
        <Icon name={icon} className="!fill-Grayscale-40" />
      </button>
      {clicked && (
        <ul className="w-[245px] border mt-[5px] rounded-[10px] p-[10px]">
          {Children.map(children, child => (
            <li className="mb-[10px] last:mb-0">{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
