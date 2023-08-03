import Image from "next/image";
import React, { useState, useRef } from "react";
import magnifying from "@/app/assets/magnifying.svg";
import magnifyingfocus from "@/app/assets/magnifyingfocus.svg";

export interface SearchfieldProps {
  onClickSearchfield?: (value: string) => void;
}

export default function Searchfield({ onClickSearchfield }: SearchfieldProps) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchfield = () => {
    if (onClickSearchfield && inputRef.current) {
      onClickSearchfield(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchfield();
    }
  };
  return (
    <div>
      {focus ? (
        <div className="input-wrapper w-[245px] h-[40px] outline-none border border-blue-500 rounded-[10px]">
          <input
            ref={inputRef}
            type="text"
            id="Searchfield"
            className="relative top-[7px] left-[15px] w-[182px] h-[17px] font-medium text-sm outline-none text-Grayscale-80"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyDown={handleKeyDown}
          />
          <div
            onClick={handleSearchfield}
            role="button"
            tabIndex={0}
            onKeyPress={handleKeyDown}
          >
            <Image
              src={magnifying}
              alt="돋보기"
              className="relative top-[-13px] left-[212px]"
            />
          </div>
        </div>
      ) : (
        <div className="input-wrapper w-[245px] h-[40px] outline-none border border-Grayscale-10 rounded-[10px]">
          <input
            ref={inputRef}
            type="text"
            id="Searchfield"
            className="relative top-[7px] left-[15px] w-[182px] h-[17px] font-medium text-sm outline-none text-Grayscale-80"
            placeholder="검색어를 입력해주세요"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyDown={handleKeyDown}
          />
          <div
            onClick={handleSearchfield}
            role="button"
            tabIndex={0}
            onKeyPress={handleKeyDown}
          >
            <Image
              src={magnifyingfocus}
              alt="돋보기"
              className="relative top-[-13px] left-[212px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
