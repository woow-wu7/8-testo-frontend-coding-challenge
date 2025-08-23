import { storyblokEditable } from "@storyblok/react";

const TwoColumnSection = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="two-column-section">
    <h2>{blok.title}</h2>
    <div className="columns">
      <div className="text">
        <h3>{blok.headline}</h3>
        <p>{blok.description}</p>
        <button>{blok.button_text}</button>
      </div>
      <div className="image">
        <img src={blok.image?.filename} alt={blok.image?.alt} />
      </div>
    </div>
  </section>
);

export default TwoColumnSection;
