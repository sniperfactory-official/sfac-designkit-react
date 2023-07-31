import Comment from "@/app/components/Card/Comment.tsx";

interface CardProps {
  CardType: "Comment" | "";
  children: React.ReactNode;
}

export default function Card({ CardType, children }: CardProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{CardType === "Comment" ? <Comment>{children}</Comment> : null}</>
  );
}
