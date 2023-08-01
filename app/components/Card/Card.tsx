import Comment from "@/app/components/Card/Comment.tsx";
import Lecture from "./Lecture";
import Post from "./Post";
import Vertical from "./Vertical";

interface CardProps {
  CardType: "Comment" | "Lecture" | "Post" | "Vertical";
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  CardType,
  children,
  className = "",
}: CardProps) {
  switch (CardType) {
    case "Comment":
      return <Comment className={className}>{children}</Comment>;

    case "Lecture":
      return <Lecture className={className}>{children}</Lecture>;

    case "Post":
      return <Post className={className}>{children}</Post>;

    case "Vertical":
      return <Vertical className={className}>{children}</Vertical>;

    default:
      break;
  }
}
