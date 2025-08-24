import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Text = ({ blok }) => {
  if (!blok || !blok.content) return null;

  const renderContent = (content) => {
    return content.map((block, index) => {
      // 1
      // type: paragraph
      if (block.type === "paragraph") {
        return (
          <p
            key={index}
            className="mb-2 text-gray-500 leading-relaxed text-sm sm:text-sm"
          >
            {block.content?.map((contentItem, contentIndex) => {
              if (contentItem.type === "text") {
                const text = contentItem.text;
                const marks = contentItem.marks || [];

                // process className
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
      }
      // 2
      // type heading
      else if (block.type === "heading") {
        const level = block.attrs?.level || 2;
        // const HeadingTag = `h${level}`;

        const headingClasses = {
          6: "text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight",
          5: "text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight",
          4: "text-2xl sm:text-3xl text-gray-900 mb-4 leading-tight",
          3: "text-xl sm:text-2xl text-gray-900 mb-4 leading-tight",
          2: "text-lg sm:text-xl text-gray-900 mb-3 leading-tight",
          1: "text-base sm:text-lg text-gray-900 mb-3 leading-tight",
        };

        return (
          <div
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
              if (contentItem.type === "hard_break") {
                return <div key={contentIndex}></div>;
              }
              return null;
            })}
          </div>
        );
      }
      // 3
      // type bullet_list
      else if (block.type === "bullet_list") {
        return (
          <ul
            key={index}
            className="list-disc list-inside mb-4 text-gray-700 space-y-2"
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
          </ul>
        );
      }
      // 4
      // type ordered_list
      else if (block.type === "ordered_list") {
        return (
          <ol
            key={index}
            className="list-decimal list-inside mb-4 text-gray-700 space-y-2"
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
