import Image from "next/image";
import React, { useState, useRef } from "react";

export interface SearchfieldProps {
  onClick?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Searchfield({
  onClick,
  placeholder = "검색어를 입력해주세요",
  className,
}: SearchfieldProps) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchfield = () => {
    if (onClick && inputRef.current) {
      onClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchfield();
    }
  };
  const wrapperFocusStyle = focus ? "border-blue-500" : "border-Grayscale-10";
  const placeholderText = focus ? "" : `${placeholder}`;

  return (
    <div>
      <div
        className={`${wrapperFocusStyle} ${className} px-[15px] relative border w-[245px] py-3 rounded-[10px] flex`}
      >
        <input
          ref={inputRef}
          placeholder={placeholderText}
          type="text"
          id="Searchfield"
          className=" font-medium text-sm text-Grayscale-80 w-[182px]"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex right-[15px] absolute">
          <button
            type="button"
            className="w-[20px] h-[20px] text-[0]"
            onClick={handleSearchfield}
          >
            돋보기
            <Image
              src={
                focus
                  ? "@/assets/magnifying.svg"
                  : "@/assets/magnifyingfocus.svg"
              }
              alt="돋보기"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
