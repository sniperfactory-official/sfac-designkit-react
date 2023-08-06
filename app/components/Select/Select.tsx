// import React, { useState, ReactNode } from "react";

// type SelectProps = {
//   mode: "Main" | "Sub";
//   children?: ReactNode;
// };

// export default function Select({ mode, children }: SelectProps) {
//   const [focused, setFocused] = useState(false);

//   return (
//     <div>
//       {focused ? (
//         <div
//           className={`w-[245px] h-[46px] outline-none rounded-[10px] relative top-3 left-5 ${
//             mode === "Main" ? "bg-blue-100" : ""
//           }`}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           tabIndex={0}
//         >
//           <div
//             className={`relative top-[13px] left-[55px] text-Grayscale-80 ${
//               mode === "Sub" ? "text-Primary-80" : ""
//             }`}
//           >
//             {children}
//           </div>
//         </div>
//       ) : (
//         <div
//           className={`w-[245px] h-[46px] outline-none rounded-[10px] relative top-3 left-5`}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           tabIndex={0}
//         >
//           <div className="relative top-[13px] left-[55px] text-Grayscale-80">
//             {children}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";
// import React, { useState, ReactNode } from "react";
// import Image from "next/image";

// type SelectProps = {
//   mode: "Main" | "Sub";
//   children?: ReactNode;
//   img?: string; // 추가된 prop
//   className?: string;
// };

// export default function Select({
//   mode,
//   children,
//   img,
//   className,
// }: SelectProps) {
//   const [focused, setFocused] = useState(false);

//   const Style =
//     "w-[245px] h-[46px] outline-none rounded-[10px] relative top-3 left-5";

//   return (
//     <div>
//       {focused ? (
//         <div
//           className={`${Style} ${
//             mode === "Main" ? "bg-blue-100" : ""
//           } ${className}`}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           tabIndex={0}
//         >
//           <div
//             className={`relative top-[13px] left-[55px] text-Grayscale-80 ${
//               mode === "Sub" ? "text-Primary-80" : ""
//             }`}
//           >
//             {children}
//           </div>
//           {img && (
//             <div className="absolute top-[10px] left-[10px]">
//               <Image src={img} alt="Icon" width={20} height={20} />
//             </div>
//           )}
//         </div>
//       ) : (
//         <div
//           className={`${Style} ${className}`}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           tabIndex={0}
//         >
//           <div className="relative top-[13px] left-[55px] text-Grayscale-80">
//             {children}
//           </div>
//           {img && (
//             <div className="absolute top-[10px] left-[10px]">
//               <Image src={img} alt="Icon" width={20} height={20} />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState, ReactNode } from "react";

type SelectProps = {
  mode: "Main" | "Sub";
  children?: ReactNode;
};

export default function Select({ mode, children }: SelectProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      {focused ? (
        <button
          type="button"
          className={`w-[245px] h-[46px] outline-none border-none rounded-[10px] relative top-3 left-5 ${
            mode === "Main" ? "bg-blue-100" : ""
          }`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <div
            className={`relative top-[13px] left-[55px] text-Grayscale-80 ${
              mode === "Sub" ? "text-Primary-80" : ""
            }`}
          >
            {children}
          </div>
        </button>
      ) : (
        <button
          type="button"
          className="w-[245px] h-[46px] outline-none border-none rounded-[10px] relative top-3 left-5"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <div className="relative top-[13px] left-[55px] text-Grayscale-80">
            {children}
          </div>
        </button>
      )}
    </div>
  );
}
