import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Button from "./Button";
import Text from "./Text";

const ImageTextSection = ({ blok }) => {
  console.log("====ImageTextSection", blok);
  return (
    <section
      className={`py-12 ${
        blok.background_color === "white" ? "bg-white" : "bg-gray-50"
      }`}
      {...storyblokEditable(blok)}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`grid ${
            blok.reverse_layout
              ? "md:grid-cols-2 md:gap-12"
              : "md:grid-cols-2 md:gap-12"
          } items-center gap-8`}
        >
          {/* 图片部分 */}
          <div
            className={`${blok.reverse_layout ? "md:order-2" : "md:order-1"}`}
          >
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

          {/* 内容部分 */}
          <div
            className={`${blok.reverse_layout ? "md:order-1" : "md:order-2"}`}
          >
            {/* 标题 */}
            {blok.headline && (
              <div className="mb-6">
                <Text blok={blok.headline} />
              </div>
            )}

            {/* 文本内容 */}
            {blok.text && (
              <div className="mb-8">
                <Text blok={blok.text} />
              </div>
            )}

            {/* 按钮 */}
            {blok.button && blok.button.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {blok.button.map((btn, index) => (
                  <Button key={btn._uid || index} blok={btn} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
