import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Button = ({ blok }) => {
  const getButtonClasses = () => {
    let baseClasses =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    // 按钮颜色样式
    switch (blok.button_color) {
      case "primary":
        baseClasses +=
          " bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
        break;
      case "secondary":
        baseClasses +=
          " bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500";
        break;
      case "success":
        baseClasses +=
          " bg-green-600 text-white hover:bg-green-700 focus:ring-green-500";
        break;
      case "danger":
        baseClasses +=
          " bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
        break;
      default:
        baseClasses +=
          " bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500";
    }

    // 按钮尺寸
    switch (blok.size) {
      case "large":
        baseClasses += " text-lg px-8 py-4";
        break;
      case "small":
        baseClasses += " text-sm px-4 py-2";
        break;
      default: // medium
        baseClasses += " text-base px-6 py-3";
    }

    return baseClasses;
  };

  const getButtonStyle = () => {
    switch (blok.style) {
      case "outline":
        return "border-2 border-current bg-transparent hover:bg-current hover:text-white";
      case "ghost":
        return "bg-transparent hover:bg-gray-100";
      default:
        return "";
    }
  };

  const buttonClasses = getButtonClasses();
  const buttonStyle = getButtonStyle();
  const finalClasses = `${buttonClasses} ${buttonStyle}`.trim();

  return (
    <a
      href={blok.link?.cached_url || blok.link?.url || "#"}
      className={finalClasses}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </a>
  );
};

export default Button;
