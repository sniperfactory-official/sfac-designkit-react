import React, { TextareaHTMLAttributes } from "react";
import Text from "../Text";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode: "title" | "content";
  onChangeTitle?: (value: string) => void;
  // onChangeAuthor?: (value: string) => void;
  onChangeContent?: (value: string) => void;
  className?: string;
  placeholder?: string;
  author?: string;
}

export default function Textarea({
  mode,
  disabled,
  className,
  placeholder = "입력해주세요",
  onChangeTitle,
  // onChangeAuthor,
  author,
  onChangeContent,
  ...textareaProps
}: TextareaProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeTitle) {
      onChangeTitle(e.target.value);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChangeContent) {
      onChangeContent(e.target.value);
    }
  };

  const Style = "w-[579px] rounded-[10px] text-black";

  if (mode === "title") {
    return (
      <div className={`h-[79px] border border-[#E8E8E8] ${Style} ${className}`}>
        <div className="w-[362px]">
          <p>
            <input
              id="titleInput"
              placeholder={placeholder}
              type="text"
              className="outline-none ml-[14px] mt-[19px] w-[362px]"
              onChange={handleTitleChange}
            />
          </p>
          <p>
            <label
              htmlFor="myTitle"
              className="text-Grayscale-40 text-xs ml-[14px]"
            >
              작성자
              <Text
                size="xs"
                weight="bold"
                className="text-Grayscale-60 ml-[6px]"
              >
                {author}
              </Text>
            </label>
          </p>
        </div>
      </div>
    );
  }

  if (mode === "content") {
    const textareaClass = `border h-[234px] outline-none ${Style} ${className} ${
      disabled ? "Grayscale-0 text-Grayscale-20" : ""
    }`;

    return (
      <div className={textareaClass}>
        <textarea
          id="myTextarea"
          placeholder={placeholder}
          className="ml-[22px] mt-[22px] w-[535px] h-[190px] outline-none resize-none"
          disabled={disabled}
          onChange={handleTextareaChange}
          rows={textareaProps.rows}
          cols={textareaProps.cols}
          maxLength={textareaProps.maxLength}
        />
      </div>
    );
  }
}
