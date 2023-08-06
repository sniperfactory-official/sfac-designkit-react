// import React, { useState, ReactNode } from "react";
// import Image from "next/image";
// import Arrow from "@/app/assets/arrow.svg";
// import ToggleButton from "@/app/assets/toggleButton.svg";
// import Ai from "@/app/assets/icons/imgIcon/AI.svg";
// import All from "@/app/assets/icons/imgIcon/All.svg";
// import AngelFace from "@/app/assets/icons/imgIcon/AngelFace.svg";
// import Data from "@/app/assets/icons/imgIcon/Data.svg";
// import Design from "@/app/assets/icons/imgIcon/Design.svg";
// import Disagree from "@/app/assets/icons/imgIcon/Disagree.svg";
// import Folder from "@/app/assets/icons/imgIcon/Folder.svg";
// import Game from "@/app/assets/icons/imgIcon/Game.svg";
// import Hello from "@/app/assets/icons/imgIcon/Hello.svg";
// import Hit from "@/app/assets/icons/imgIcon/Hit.svg";
// import Link from "@/app/assets/icons/imgIcon/Link.svg";
// import Live from "@/app/assets/icons/imgIcon/Live.svg";
// import Note from "@/app/assets/icons/imgIcon/Note.svg";
// import Security from "@/app/assets/icons/imgIcon/Security.svg";
// import Sound from "@/app/assets/icons/imgIcon/Sound.svg";
// import Web from "@/app/assets/icons/imgIcon/Web.svg";

// type SelectProps = {
//   mode: "Main" | "Sub";
//   children?: ReactNode;
//   className?: string;
//   focusedClassName?: string;
//   src?:
//     | "Arrow"
//     | "ToggleButton"
//     | "Ai"
//     | "All"
//     | "AngelFace"
//     | "Data"
//     | "Design"
//     | "Disagree"
//     | "Folder"
//     | "Game"
//     | "Hello"
//     | "Hit"
//     | "Link"
//     | "Live"
//     | "Note"
//     | "Security"
//     | "Sound"
//     | "Web";
// };

// export default function Select({
//   mode,
//   children,
//   className,
//   focusedClassName,
//   src = "AngelFace",
// }: SelectProps) {
//   const [focused, setFocused] = useState(false);

// function determineSrc(name: string): string {
//   switch (name) {
//     case "Arrow":
//       return Arrow;
//     case "ToggleButton":
//       return ToggleButton;
//     case "Ai":
//       return Ai;
//     case "All":
//       return All;
//     case "AngelFace":
//       return AngelFace;
//     case "Data":
//       return Data;
//     case "Design":
//       return Design;
//     case "Disagree":
//       return Disagree;
//     case "Folder":
//       return Folder;
//     case "Game":
//       return Game;
//     case "Hello":
//       return Hello;
//     case "Hit":
//       return Hit;
//     case "Link":
//       return Link;
//     case "Live":
//       return Live;
//     case "Note":
//       return Note;
//     case "Security":
//       return Security;
//     case "Sound":
//       return Sound;
//     case "Web":
//       return Web;
//     default:
//       return AngelFace;
//   }
// }
//   // flex items-center justify-center
//   const divStyle =
//     mode === "Sub"
//       ? "text-Grayscale-80 flex items-center justify-center"
//       : "text-Grayscale-80 flex items-center";

//   // relative top-3 left-5
//   const buttonStyle =
//     "w-[245px] h-[46px] outline-none border-none rounded-[10px]";

//   return (
//     <div>
//       {focused ? (
//         <button
//           type="button"
//           className={`${buttonStyle} ${className} ${focusedClassName} ${
//             mode === "Main" ? "bg-blue-100" : ""
//           }`}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//         >
//           <div
//             className={`${divStyle} ${focusedClassName} ${
//               mode === "Sub" ? "text-Primary-80" : ""
//             }`}
//           >
//             {mode === "Main" && (
//               <Image
//                 src={determineSrc(src)}
//                 alt="Icon"
//                 width={20}
//                 height={20}
//                 className="ml-5 mr-3"
//               />
//             )}
//             {children}
//           </div>
//         </button>
//       ) : (
//         <button
//           type="button"
//           className={`${buttonStyle} ${className}`}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//         >
//           <div className={divStyle}>
//             {mode === "Main" && (
//               <Image
//                 src={determineSrc(src)}
//                 alt="Icon"
//                 width={20}
//                 height={20}
//                 className="ml-5 mr-3"
//               />
//             )}
//             {children}
//           </div>
//         </button>
//       )}
//     </div>
//   );
// }
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
    "w-[245px] h-[46px] outline-none border-none rounded-[10px] text-Grayscale-80 flex items-center";
  const buttonStyle = `${buttonBaseStyle} ${className} ${
    focused ? focusedClassName : ""
  }`;

  return (
    <div>
      {focused ? (
        <button
          type="button"
          className={buttonStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {checkbox && (
            <input
              type="checkbox"
              onChange={e => setFocused(e.target.checked)}
            />
          )}

          {mode === "Main" && (
            <>
              <Image
                src={determineSrc(src)}
                alt="Icon"
                width={20}
                height={20}
                className="ml-5 mr-3"
              />
              {children}
            </>
          )}

          {mode === "Sub" && children}
        </button>
      ) : (
        <button
          type="button"
          className={buttonStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {checkbox && (
            <input
              type="checkbox"
              onChange={e => setFocused(e.target.checked)}
            />
          )}

          {mode === "Main" && (
            <>
              <Image
                src={determineSrc(src)}
                alt="Icon"
                width={20}
                height={20}
                className="ml-5 mr-3"
              />
              {children}
            </>
          )}

          {mode === "Sub" && children}
        </button>
      )}
    </div>
  );
}
