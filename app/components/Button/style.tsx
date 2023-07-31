export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "link"
  | "ghost";

export const variantsStyles: Record<ButtonVariant, string> = {
  primary: "bg-Primary-80 text-white",
  secondary: "bg-Grayscale-5 text-Grayscale-60",
  destructive: "bg-[#FF5757] text-white",
  outline: "bg-Primary-5 border border-Primary-40 text-Primary-80",
  link: "text-Primary-60 hover:underline underline-offset-4 decoration-2",
  ghost: "text-Primary-60 hover:bg-Primary-5",
};

export const buttonBasicStyle = "h-[35px] px-8 rounded-lg";
export const buttonStyle = "rounded-[10px] w-[35rem] py-4 justify-center";
export const disabledStyles = "text-Grayscale-20 bg-Grayscale-5";
export const asChildStyle = `${buttonBasicStyle} rounded-[7px] text-Grayscale-20 bg-Grayscale-5`;
