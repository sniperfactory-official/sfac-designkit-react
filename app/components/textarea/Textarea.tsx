import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode: "title" | "content";
  onChangeTitle?: (value: string) => void;
  onChangeAuthor?: (value: string) => void;
  onChangeContent?: (value: string) => void;
}

export default function Textarea({
  mode,
  disabled,
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

  if (mode === "title") {
    return (
      <div className="w-[579px] h-[79px] rounded-[10px] border border-[#E8E8E8] text-black">
        <div className="w-[362px] h-[42px] relative top-[19px] left-[14px]">
          <input
            id="titleInput"
            placeholder="제목을 입력해주세요"
            type="text"
            className="outline-none"
            onChange={handleTitleChange}
          />
          <br />
          <label htmlFor="authorInput" className="text-Grayscale-40 text-xs">
            작성자&nbsp;
            <input
              id="authorInput"
              type="text"
              className="outline-none"
              onChange={handleAuthorChange}
            />
          </label>
        </div>
      </div>
    );
  }

  if (mode === "content") {
    const textareaClass = `border p-2 w-[579px] h-[234px] rounded-[10px] text-black outline-none ${
      disabled ? "Grayscale-0 text-Grayscale-20" : ""
    }`;

    return (
      <textarea
        placeholder="내용을 작성해주세요."
        className={textareaClass}
        disabled={disabled}
        onChange={handleTextareaChange}
        rows={textareaProps.rows}
        cols={textareaProps.cols}
        maxLength={textareaProps.maxLength}
      />
    );
  }

  return null;
}
