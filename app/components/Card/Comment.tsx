import { twMerge } from "tailwind-merge";
import dot from "@/app/assets/grayDot.svg";
import redNew from "@/app/assets/newBadge.svg";
import Image from "next/image";
import Text from "../Text.tsx";

type UserRoleType = "admin" | "student";

interface CommentProps {
  username: string;
  content: string;
  className: string;
  role: UserRoleType;
  date: string;
  read: boolean;
}

export default function Comment({
  username,
  className,
  content,
  role,
  date,
  read,
}: CommentProps) {
  return (
    <div className={twMerge(`p-25 mb-15`, className)}>
      {/* TODO : add avatar component */}

      <Text size="base" weight="bold">
        {username}
      </Text>
      <Image src={dot} alt="" />
      <Text size="base" weight="medium">
        {role === "student" ? "수강생" : "멘토"}
      </Text>

      <p>
        <Text size="sm" weight="medium">
          {content}
        </Text>
      </p>
      <Text size="sm" weight="bold">
        {date}
      </Text>
      {/* TODO : add Red 'new' badge */}
      {read ? <Image src={redNew} alt="new comment" /> : null}
    </div>
  );
}
