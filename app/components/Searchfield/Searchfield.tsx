import React, { useState } from "react";

export interface SearchfieldProps {
  onChangeSearchfield?: (value: string) => void;
}

export default function Searchfield({ onChangeSearchfield }: SearchfieldProps) {
  const [focus, setFocus] = useState(false);

  const handleSearchfield = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeSearchfield) {
      onChangeSearchfield(e.target.value);
    }
  };

  return (
    <div>
      {focus ? (
        <div className="input-wrapper w-[245px] h-[40px] outline-none border border-blue-500 rounded-[10px] relative top-3 left-5">
          <input
            type="text"
            id="Searchfield"
            className="relative top-[7px] left-[15px] w-[182px] h-[17px] font-medium text-sm outline-none text-Grayscale-80"
            onChange={handleSearchfield}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative top-[-13px] left-[212px]"
          >
            <path
              d="M13.7181 12.297H12.884L12.5884 12.0121C13.8554 10.5348 14.51 8.51933 14.151 6.37724C13.6548 3.44374 11.2052 1.10116 8.2489 0.742386C3.78272 0.193674 0.0239496 3.95024 0.572983 8.4138C0.931967 11.3684 3.27592 13.8165 6.21114 14.3125C8.35448 14.6712 10.3711 14.017 11.8493 12.7507L12.1344 13.0462V13.8798L16.6217 18.3645C17.0546 18.7971 17.762 18.7971 18.1949 18.3645C18.6278 17.9318 18.6278 17.2249 18.1949 16.7922L13.7181 12.297ZM7.38312 12.297C4.75409 12.297 2.63186 10.176 2.63186 7.54853C2.63186 4.92104 4.75409 2.80006 7.38312 2.80006C10.0121 2.80006 12.1344 4.92104 12.1344 7.54853C12.1344 10.176 10.0121 12.297 7.38312 12.297Z"
              fill="#669BFF"
            />
          </svg>
        </div>
      ) : (
        <div className="input-wrapper w-[245px] h-[40px] outline-none border border-Grayscale-10 rounded-[10px] relative top-3 left-5">
          <input
            type="text"
            id="Searchfield"
            className="relative top-[7px] left-[15px] w-[182px] h-[17px] font-medium text-sm outline-none text-Grayscale-80"
            placeholder="검색어를 입력해주세요"
            onChange={handleSearchfield}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative top-[-13px] left-[212px]"
          >
            <path
              d="M13.6986 11.7863H12.8645L12.5688 11.5013C13.8359 10.024 14.4905 8.00858 14.1315 5.8665C13.6352 2.933 11.1857 0.590417 8.22937 0.231644C3.76319 -0.317069 0.00441831 3.4395 0.553452 7.90306C0.912436 10.8577 3.25639 13.3058 6.19161 13.8017C8.33495 14.1605 10.3516 13.5063 11.8298 12.24L12.1148 12.5355V13.3691L16.6021 17.8537C17.035 18.2864 17.7424 18.2864 18.1753 17.8537C18.6082 17.4211 18.6082 16.7141 18.1753 16.2815L13.6986 11.7863ZM7.36358 11.7863C4.73456 11.7863 2.61233 9.66527 2.61233 7.03778C2.61233 4.4103 4.73456 2.28931 7.36358 2.28931C9.99261 2.28931 12.1148 4.4103 12.1148 7.03778C12.1148 9.66527 9.99261 11.7863 7.36358 11.7863Z"
              fill="#CCCCCC"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
