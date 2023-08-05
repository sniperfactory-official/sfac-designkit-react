import Image from "next/image";
import React, { useState, useRef } from "react";
import magnifying from "@/app/assets/magnifying.svg";
import magnifyingfocus from "@/app/assets/magnifyingfocus.svg";

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
        className={`input-wrapper w-[245px] h-[40px] outline-none border rounded-[10px] ${wrapperFocusStyle} ${className}`}
      >
        <div>
          <input
            ref={inputRef}
            placeholder={placeholderText}
            type="text"
            id="Searchfield"
            className="relative top-[7px] left-[15px] w-[182px] h-[17px] font-medium text-sm outline-none text-Grayscale-80"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div
          onClick={handleSearchfield}
          role="button"
          tabIndex={0}
          onKeyPress={handleKeyDown}
        >
          <Image
            src={focus ? magnifying : magnifyingfocus}
            alt="돋보기"
            className="relative top-[-13px] left-[212px]"
          />
        </div>
      </div>
    </div>
  );
}
