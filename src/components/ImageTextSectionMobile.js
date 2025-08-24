import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Button from "./Button";
import Text from "./Text";

const ImageTextSectionMobile = ({ blok }) => {
  console.log("====ImageTextSectionMobile", blok);

  return (
    <section
      className={`py-8 sm:py-12 ${
        blok.background_color === "white" ? "bg-white" : "bg-gray-50"
      }`}
      {...storyblokEditable(blok)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 移动端布局 - 单列堆叠结构 */}
        <div className="space-y-6 sm:space-y-8">
          {/* 标题 */}
          {blok.headline && (
            <div className="mb-6">
              <Text blok={blok.headline} />
            </div>
          )}

          {/* 文本内容 */}
          {blok.text && (
            <div className="mb-8 space-y-4">
              <Text blok={blok.text} />
            </div>
          )}

          {/* 按钮 - 移动端居中显示 */}
          {blok.button && blok.button.length > 0 && (
            <div className="flex justify-center mb-8">
              {blok.button.map((btn, index) => (
                <Button key={btn._uid || index} blok={btn} />
              ))}
            </div>
          )}

          {/* 图片 - 移动端全宽显示 */}
          {blok.image && (
            <div className="relative">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || blok.image.title}
                className={`w-full h-auto rounded-lg shadow-lg ${
                  blok.image_layout === "proportional"
                    ? "object-contain"
                    : "object-cover"
                }`}
              />
              {blok.image.copyright && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  © {blok.image.copyright}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSectionMobile;
