import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

// MARK 3 - DefaultPage Component
const DefaultPage = ({ blok }) => {
  console.log("-----DefaultPage Component/block", blok);

  return (
    <main
      className="max-w-[1200px] mx-auto px-4 py-8"
      {...storyblokEditable(blok)}
    >
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
