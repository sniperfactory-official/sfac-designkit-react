"use client";

import { ReactNode, useState } from "react";

type ButtonProps = {
  children: ReactNode;
};
export default function Tab({ children }: ButtonProps) {
  const [activeTab, setActiveTab] = useState(false);

  const isActiveTab = () => {
    setActiveTab(prev => !prev);
  };

  return (
    <button
      type="button"
      onClick={isActiveTab}
      className={`border-b-4 transition-colors duration-300 ${
        activeTab ? "border-Primary-100 text-Primary-100" : "border-transparent"
      } w-[347px] text-center pt-[14px] pb-[17px]`}
    >
      {children}
    </button>
  );
}
