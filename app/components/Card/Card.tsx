import Comment from "@/app/components/Card/Comment.tsx";
import Lecture from "@/app/components/Card//Lecture";
import Post from "@/app/components/Card//Post";
import Vertical from "@/app/components/Card//Vertical";

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
