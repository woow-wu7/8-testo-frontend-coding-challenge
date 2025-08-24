import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import TestoButton from "./Button";
import TestoText from "./Text";

const ImageTextSection = ({ blok }) => {
  console.log("====ImageTextSection", blok);

  return (
    <section
      className="py-16 lg:py-20 bg-white"
      {...storyblokEditable(blok)}
      style={{
        border: "1px solid red",
        backgroundColor: blok.background_color,
      }}
    >
      {/* PC Pad Mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------- ------- ------- ------- ------- ------- ------- dividing line. ------- ------- */}
        {/* 1 */}
        {/* PC */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          {/* PC Left */}
          <div
            className={`${blok.reverse_layout ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Headline */}
            {blok.headline && (
              <div className="mb-8">
                <TestoText blok={blok.headline} />
              </div>
            )}

            {/* Paragraph */}
            {blok.text && (
              <div className="mb-10 space-y-6">
                <TestoText blok={blok.text} />
              </div>
            )}

            {/* Button */}
            {blok.button && blok.button.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {blok.button.map((btn, index) => (
                  <TestoButton key={btn._uid || index} blok={btn} />
                ))}
              </div>
            )}
          </div>

          {/* PC Right */}
          <div
            className={`h-full ${
              blok.reverse_layout ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* image */}
            {blok.image && (
              <div className="relative h-full">
                <img
                  src={blok.image.filename}
                  alt={blok.image.alt || blok.image.title}
                  className={`h-full rounded-xl shadow-2xl ${
                    blok.image_layout === "proportional"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
                {blok.image.copyright && (
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    © {blok.image.copyright}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ------- ------- ------- ------- ------- ------- ------- dividing line. ------- ------- */}
        {/* 2 */}
        {/* Pad */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 md:gap-12 items-center">
          {/* 左侧内容区域 */}
          <div
            className={`${blok.reverse_layout ? "md:order-2" : "md:order-1"}`}
          >
            {/* 标题 */}
            {blok.headline && (
              <div className="mb-6">
                <TestoText blok={blok.headline} />
              </div>
            )}

            {/* 文本内容 */}
            {blok.text && (
              <div className="mb-8 space-y-4">
                <TestoText blok={blok.text} />
              </div>
            )}

            {/* 按钮 */}
            {blok.button && blok.button.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {blok.button.map((btn, index) => (
                  <TestoButton key={btn._uid || index} blok={btn} />
                ))}
              </div>
            )}
          </div>

          {/* 右侧图片区域 */}
          <div
            className={`${blok.reverse_layout ? "md:order-1" : "md:order-2"}`}
          >
            {blok.image && (
              <div className="relative">
                <img
                  src={blok.image.filename}
                  alt={blok.image.alt || blok.image.title}
                  className={`w-full h-auto rounded-lg shadow-xl ${
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

        {/* ------- ------- ------- ------- ------- ------- ------- dividing line. ------- ------- */}
        {/* 3 */}
        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {/* 标题 */}
          {blok.headline && (
            <div className="mb-6">
              <TestoText blok={blok.headline} />
            </div>
          )}

          {/* 文本内容 */}
          {blok.text && (
            <div className="mb-8 space-y-4">
              <TestoText blok={blok.text} />
            </div>
          )}

          {/* 按钮 - 移动端居中显示 */}
          {blok.button && blok.button.length > 0 && (
            <div className="flex justify-center mb-8">
              {blok.button.map((btn, index) => (
                <TestoButton key={btn._uid || index} blok={btn} />
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

export default ImageTextSection;
