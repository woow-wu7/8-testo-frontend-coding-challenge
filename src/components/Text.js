import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Text = ({ blok }) => {
  if (!blok || !blok.content) return null;

  const renderContent = (content) => {
    return content.map((block, index) => {
      if (block.type === "paragraph") {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {block.content?.map((contentItem, contentIndex) => {
              if (contentItem.type === "text") {
                const text = contentItem.text;
                const marks = contentItem.marks || [];

                // 处理文本样式
                let className = "";
                if (marks.some((mark) => mark.type === "bold")) {
                  className += "font-bold ";
                }
                if (marks.some((mark) => mark.type === "italic")) {
                  className += "italic ";
                }
                if (marks.some((mark) => mark.type === "underline")) {
                  className += "underline ";
                }
                if (
                  marks.some(
                    (mark) => mark.type === "textStyle" && mark.attrs?.color
                  )
                ) {
                  className += `text-${mark.attrs.color} `;
                }

                return (
                  <span key={contentIndex} className={className.trim()}>
                    {text}
                  </span>
                );
              } else if (contentItem.type === "hard_break") {
                return <br key={contentIndex} />;
              }
              return null;
            })}
          </p>
        );
      } else if (block.type === "heading") {
        const level = block.attrs?.level || 2;
        const HeadingTag = `h${level}`;

        const headingClasses = {
          1: "text-4xl font-bold text-gray-900 mb-6",
          2: "text-3xl font-bold text-gray-900 mb-6",
          3: "text-2xl font-bold text-gray-900 mb-4",
          4: "text-xl font-bold text-gray-900 mb-4",
          5: "text-lg font-bold text-gray-900 mb-3",
          6: "text-base font-bold text-gray-900 mb-3",
        };

        return (
          <HeadingTag
            key={index}
            className={headingClasses[level] || headingClasses[2]}
          >
            {block.content?.map((contentItem, contentIndex) => {
              if (contentItem.type === "text") {
                const text = contentItem.text;
                const marks = contentItem.marks || [];

                if (marks.some((mark) => mark.type === "bold")) {
                  return <strong key={contentIndex}>{text}</strong>;
                }
                return text;
              }
              return null;
            })}
          </HeadingTag>
        );
      } else if (block.type === "bullet_list") {
        return (
          <ul key={index} className="list-disc list-inside mb-4 text-gray-700">
            {block.content?.map((listItem, listIndex) => (
              <li key={listIndex} className="mb-2">
                {listItem.content?.map((contentItem, contentIndex) => {
                  if (contentItem.type === "text") {
                    return contentItem.text;
                  }
                  return null;
                })}
              </li>
            ))}
          </ul>
        );
      } else if (block.type === "ordered_list") {
        return (
          <ol
            key={index}
            className="list-decimal list-inside mb-4 text-gray-700"
          >
            {block.content?.map((listItem, listIndex) => (
              <li key={listIndex} className="mb-2">
                {listItem.content?.map((contentItem, contentIndex) => {
                  if (contentItem.type === "text") {
                    return contentItem.text;
                  }
                  return null;
                })}
              </li>
            ))}
          </ol>
        );
      }
      return null;
    });
  };

  return <div {...storyblokEditable(blok)}>{renderContent(blok.content)}</div>;
};

export default Text;
