import React, { useState, ReactNode } from "react";
import Arrow from "@/app/assets/arrow.svg";
// import toggleButton from "@/app/assets/toggleButton.svg";
import Image from "next/image";

type SelectProps = {
  mode: "Main" | "Sub";
  children?: ReactNode;
  className?: string;
  focusedClassName?: string;
  src?: string;
};

export default function Select({
  mode,
  children,
  className,
  focusedClassName,
  src = Arrow,
}: SelectProps) {
  const [focused, setFocused] = useState(false);

  const divStyle = "text-Grayscale-80 flex items-center justify-center";
  const buttonStyle =
    "w-[245px] h-[46px] outline-none border-none rounded-[10px] relative top-3 left-5";

  return (
    <div>
      {focused ? (
        <button
          type="button"
          className={`${buttonStyle} ${className} ${focusedClassName} ${
            mode === "Main" ? "bg-blue-100" : ""
          }`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <div
            className={`${divStyle} ${focusedClassName} ${
              mode === "Sub" ? "text-Primary-80" : ""
            }`}
          >
            {mode === "Main" && (
              <Image
                src={src}
                alt="Icon"
                width={20}
                height={20}
                // className="ml-6 mr-6"
              />
            )}
            {children}
          </div>
        </button>
      ) : (
        <button
          type="button"
          className={`${buttonStyle} ${className}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <div className={divStyle}>
            {mode === "Main" && (
              <Image
                src={src}
                alt="Icon"
                width={20}
                height={20}
                // className="ml-6 mr-6"
              />
            )}
            {children}
          </div>
        </button>
      )}
    </div>
  );
}

// import React, { useState, ReactNode } from "react";
// import Arrow from "@/app/assets/arrow.svg";
// import toggleButton from "@/app/assets/toggleButton.svg";
// import Image from "next/image";

// type SelectProps = {
//   mode: "Main" | "Sub";
//   children?: ReactNode;
//   className?: string;
//   focusedClassName?: string;
//   src?: React.ComponentType<{ className?: string }>;
// };

// export default function Select({
//   mode,
//   children,
//   className,
//   focusedClassName,
//   src = Arrow, // 기본값은 Arrow로 설정합니다.
// }: SelectProps) {
//   const [focused, setFocused] = useState(false);
//   const SvgIcon = src;

//   const divStyle = "text-Grayscale-80 flex items-center justify-center";
//   const buttonStyle =
//     "w-[245px] h-[46px] outline-none border-none rounded-[10px] relative top-3 left-5";

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
//             {mode === "Main" && <SvgIcon className="h-5 w-5" />}
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
//           <div className={`${divStyle}`}>
//             {mode === "Main" && <SvgIcon className="h-5 w-5" />}
//             {children}
//           </div>
//         </button>
//       )}
//     </div>
//   );
// }
