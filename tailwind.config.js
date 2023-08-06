/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        115: "115px",
        279: "279px",
        416: "416px",
        585: "585px",
      },
      borderRadius: {
        sm: "10px",
        circle: "50%",
      },
      boxShadow: {
        "0dp": "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        "1dp": "0px 1px 2px 0px rgba(0, 0, 0, 0.19)",
        "2dp": "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
        "4dp": "0px 4px 8px 0px rgba(0, 0, 0, 0.19)",
        "8dp": "0px 8px 16px 0px rgba(0, 0, 0, 0.19)",
        "16dp": "0px 16px 32px 0px rgba(0, 0, 0, 0.19)",
        "24dp": "0px 24px 32px 0px rgba(0, 0, 0, 0.19)",
        toast: "3px 3px 9px 0px rgba(206, 206, 206, 0.47)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        Primary: {
          5: "#F5F8FF",
          10: "#E5EEFF",
          20: "#CCDEFF",
          30: "#B2CDFF",
          40: "#99BDFF",
          50: "#7FACFF",
          60: "#669BFF",
          70: "#4C8BFF",
          80: "#337AFF",
          90: "#196AFF",
          100: "#0059FF",
        },
        Grayscale: {
          5: "#F3F3F3",
          10: "#E6E6E6",
          20: "#CCCCCC",
          30: "#B3B3B3",
          40: "#999999",
          50: "#808080",
          60: "#666666",
          70: "#4D4D4D",
          80: "#333333",
          90: "#1A1A1A",
          100: "#030303",
        },
        Meaningful: {
          red: "#FF0000",
          green: "#07A320",
        },
      },

      fontWeight: {
        bold: "700",
        semibold: "500",
        medium: "400",
      },

      fontSize: {
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        lg: "18px",
        base: "16px",
        sm: "14px",
        xs: "12px",
      },

      padding: {},

      margin: {
        "15px": "15px",
      },

      borderWidth: {
        1: "1px",
      },

      width: {
        235: "235px",
        245: "245px",
        700: "700px",
        770: "770px",
        775: "775px",
      },

      height: {
        75: "75px",
        87: "87px",
        95: "95px",
        145: "145px",
        170: "170px",
        220: "220px",
        235: "235px",
        240: "240px",
      },
    },
    plugins: [],
    safeList: ["text-2xl", "text-3xl", "text-4xl"],
  },
};
