import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Button = ({ blok }) => {
  const getButtonClasses = () => {
    let baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";

    // color
    switch (blok.button_color) {
      case "primary":
        baseClasses +=
          " bg-amber-500 text-gray-800 hover:bg-orange-600 focus:ring-orange-500 shadow-lg hover:shadow-xl";
        break;
      case "secondary":
        baseClasses +=
          " bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl";
        break;
      case "success":
        baseClasses +=
          " bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl";
        break;
      case "danger":
        baseClasses +=
          " bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl";
        break;
      default:
        baseClasses +=
          " bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-lg hover:shadow-xl";
    }

    // size
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
        return "border-2 border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white";
      case "ghost":
        return "bg-transparent text-orange-500 hover:bg-orange-50";
      case "default":
        return "rounded-full";
      default:
        return "";
    }
  };

  const getButtonOutlineStyle = () => {
    let outlineStyle = "";

    switch (blok.button_color) {
      case "primary":
        outlineStyle = "bg-white border-amber-500 border p-[2px] rounded-full";
        break;
      case "secondary":
        outlineStyle = "bg-white border-gray-500 border p-[2px] rounded-full";
        break;
      case "success":
        outlineStyle = " bg-white border-green-500 border p-[2px] rounded-full";
        break;
      case "danger":
        outlineStyle = " bg-white border-red-500 border p-[2px] rounded-full";
        break;
      default:
        outlineStyle = "bg-white border-amber-500 border p-[2px] rounded-full";
    }

    return outlineStyle;
  };

  const buttonClasses = getButtonClasses();
  const buttonStyle = getButtonStyle();
  const finalClasses = `${buttonClasses} ${buttonStyle}`.trim();

  return (
    <div className={getButtonOutlineStyle()}>
      <a
        href={blok.link?.cached_url || blok.link?.url || "#"}
        className={finalClasses}
        {...storyblokEditable(blok)}
      >
        {blok.label}
      </a>
    </div>
  );
};

export default Button;
