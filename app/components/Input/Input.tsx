import React from "react";

export interface InputProps {
  mode?: "Text" | "Label" | "Default";
  onChangeInputText?: (value: string) => void;
  onChangeInputLabel?: (value: string) => void;
  onChangeInputDefault?: (value: string) => void;
}

export default function Input({
  mode = "Default",
  onChangeInputLabel,
  onChangeInputText,
  onChangeInputDefault,
}: InputProps) {
  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeInputText) {
      onChangeInputText(e.target.value);
    }
  };
  const handleInputLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeInputLabel) {
      onChangeInputLabel(e.target.value);
    }
  };
  const handleInputDefault = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeInputDefault) {
      onChangeInputDefault(e.target.value);
    }
  };
  if (mode === "Text") {
    return (
      <div className="w-[422px] h-[87px] rounded relative top-4 left-4">
        <span className="text-Primary-80 font-bold w-9 h-[17px] relative left-[10px]">
          이메일
        </span>
        <br />
        <input
          type="email"
          id="Text"
          placeholder="이메일 주소"
          className="bg-Grayscale-5 w-[422px] h-[48px] pr-4 pt-[10px] pl-4 pb-[10px] outline-none rounded-[10px]"
          onChange={handleInputText}
        />
      </div>
    );
  }
  if (mode === "Label") {
    return (
      <div className="w-[422px] h-[87px] rounded relative top-4 left-4">
        <span className="text-Primary-80 font-bold w-[36px] h-[17px] relative left-[10px]">
          이메일
        </span>
        <br />
        <input
          type="email"
          id="Label"
          placeholder="이메일 주소"
          className="bg-Grayscale-5 w-[422px] h-[48px] pr-4 pt-[10px] pl-4 pb-[10px] outline-none rounded-[10px]"
          onChange={handleInputLabel}
        />
        <br />
        <span className="text-Grayscale-40 font-medium text-xs relative left-[10px]">
          이메일을 입력해주세요
        </span>
      </div>
    );
  }
  if (mode === "Default") {
    return (
      <input
        type="email"
        id="Default"
        placeholder="이메일 주소"
        className="bg-Grayscale-5 w-[422px] h-[48px] pr-4 pt-[10px] pl-4 pb-[10px] outline-none rounded-[10px] relative top-4 left-4"
        onChange={handleInputDefault}
      />
    );
  }
  return null;
}
