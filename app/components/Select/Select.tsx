import React, { useState, ReactNode } from "react";
import Image from "next/image";
import Arrow from "@/app/assets/arrow.svg";
import ToggleButton from "@/app/assets/toggleButton.svg";
import Ai from "@/app/assets/icons/imgIcon/AI.svg";
import All from "@/app/assets/icons/imgIcon/All.svg";
import AngelFace from "@/app/assets/icons/imgIcon/AngelFace.svg";
import Data from "@/app/assets/icons/imgIcon/Data.svg";
import Design from "@/app/assets/icons/imgIcon/Design.svg";
import Disagree from "@/app/assets/icons/imgIcon/Disagree.svg";
import Folder from "@/app/assets/icons/imgIcon/Folder.svg";
import Game from "@/app/assets/icons/imgIcon/Game.svg";
import Hello from "@/app/assets/icons/imgIcon/Hello.svg";
import Hit from "@/app/assets/icons/imgIcon/Hit.svg";
import Link from "@/app/assets/icons/imgIcon/Link.svg";
import Live from "@/app/assets/icons/imgIcon/Live.svg";
import Note from "@/app/assets/icons/imgIcon/Note.svg";
import Security from "@/app/assets/icons/imgIcon/Security.svg";
import Sound from "@/app/assets/icons/imgIcon/Sound.svg";
import Web from "@/app/assets/icons/imgIcon/Web.svg";

type SelectProps = {
  mode: "Main" | "Sub";
  children?: ReactNode;
  className?: string;
  focusedClassName?: string;
  src?:
    | "Arrow"
    | "ToggleButton"
    | "Ai"
    | "All"
    | "AngelFace"
    | "Data"
    | "Design"
    | "Disagree"
    | "Folder"
    | "Game"
    | "Hello"
    | "Hit"
    | "Link"
    | "Live"
    | "Note"
    | "Security"
    | "Sound"
    | "Web";
  checkbox?: boolean;
};

export default function Select({
  mode,
  children,
  className,
  focusedClassName,
  src = "AngelFace",
  checkbox = false,
}: SelectProps) {
  const [focused, setFocused] = useState(false);
  const [checked, setChecked] = useState(false);

  function determineSrc(name: string): string {
    switch (name) {
      case "Arrow":
        return Arrow;
      case "ToggleButton":
        return ToggleButton;
      case "Ai":
        return Ai;
      case "All":
        return All;
      case "AngelFace":
        return AngelFace;
      case "Data":
        return Data;
      case "Design":
        return Design;
      case "Disagree":
        return Disagree;
      case "Folder":
        return Folder;
      case "Game":
        return Game;
      case "Hello":
        return Hello;
      case "Hit":
        return Hit;
      case "Link":
        return Link;
      case "Live":
        return Live;
      case "Note":
        return Note;
      case "Security":
        return Security;
      case "Sound":
        return Sound;
      case "Web":
        return Web;
      default:
        return AngelFace;
    }
  }

  const buttonBaseStyle =
    "w-[245px] h-[46px] outline-none border-none rounded-[10px] flex items-center";

  const focusStyle = mode === "Main" ? "bg-red-500" : "text-red-500";

  const buttonStyle = `${buttonBaseStyle} ${className} ${
    focused ? `${focusedClassName} ${focusStyle}` : "text-Grayscale-80"
  }`;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    setFocused(isChecked);
  };

  const handleFocus = () => {
    if (checkbox) {
      setChecked(true);
    }
    setFocused(true);
  };

  const handleBlur = () => {
    if (checkbox) {
      setChecked(false);
    }
    setFocused(false);
  };
  return (
    <div>
      <button
        type="button"
        className={buttonStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {mode === "Main" && (
          <>
            <Image
              src={determineSrc(src)}
              alt="Icon"
              width={20}
              height={20}
              className="ml-5 mr-[15px] mt-[13px] mb-[13px]"
            />
            {children}
          </>
        )}

        {checkbox && (
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        )}
        {mode === "Sub" && children}
      </button>
    </div>
  );
}
