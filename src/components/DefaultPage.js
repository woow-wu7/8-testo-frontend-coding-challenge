import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const DefaultPage = ({ blok }) => {
  console.log("-----blok", blok);

  // 格式化日期
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8" {...storyblokEditable(blok)}>
      {/* 渲染 body 中的组件 */}
      {blok && blok.body && (
        <div className="space-y-8">
          {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      )}
    </main>
  );
};

export default DefaultPage;
