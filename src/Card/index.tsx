import { twMerge } from "tailwind-merge";
import React from "react";

export interface CardProps {
  CardType:
    | "Assignment"
    | "AssignmentComment"
    | "AssignmentList"
    | "Comment"
    | "Content"
    | "Lecture"
    | "Post"
    | "Vertical";
  children?: React.ReactNode;
  className?: string;
}


export default function Card({
  CardType,
  children,
  className = "",
}: CardProps) {
  const CardTypes = {
    Assignment: "w-700 h-220 p-6 rounded-sm border border-Grayscale-5",
    AssignmentComment: "w-700 h-95 p-6 rounded-sm border border-Grayscale-5",
    AssignmentList: "w-775 h-87 p-6 rounded-sm border border-Grayscale-5",
    Comment: "w-770 h-95 p-6 rounded-sm border border-Grayscale-5",
    Content: "w-235 h-75 border-0 rounded-sm border",
    Lecture: "w-770 h-170 p-6 rounded-sm border border-Grayscale-5",
    Post: "w-770 h-240 p-6 rounded-sm border border-Grayscale-5",
    Vertical: "w-245 h-235 p-6 rounded-sm border border-Grayscale-5",
  };
  return (
    <div className={twMerge(CardTypes[CardType], className)}>{children}</div>
  );
}
