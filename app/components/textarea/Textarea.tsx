import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode: "title" | "content";
  onChangeTitle?: (value: string) => void;
  onChangeAuthor?: (value: string) => void;
  onChangeContent?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function Textarea({
  mode,
  disabled,
  className,
  placeholder = "입력해주세요",
  onChangeTitle,
  onChangeAuthor,
  onChangeContent,
  ...textareaProps
}: TextareaProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeTitle) {
      onChangeTitle(e.target.value);
    }
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeAuthor) {
      onChangeAuthor(e.target.value);
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
        <div className="w-[362px] relative top-[19px] left-[14px]">
          <p>
            <input
              id="titleInput"
              placeholder={placeholder}
              type="text"
              className="outline-none"
              onChange={handleTitleChange}
            />
          </p>
          <p>
            <label htmlFor="authorInput" className="text-Grayscale-40 text-xs">
              작성자&nbsp;
              <input
                id="authorInput"
                type="text"
                className="outline-none"
                onChange={handleAuthorChange}
              />
            </label>
          </p>
        </div>
      </div>
    );
  }

  if (mode === "content") {
    const textareaClass = `border p-2 h-[234px] outline-none ${Style} ${className} ${
      disabled ? "Grayscale-0 text-Grayscale-20" : ""
    }`;

    return (
      <div>
        <textarea
          placeholder={placeholder}
          className={textareaClass}
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
