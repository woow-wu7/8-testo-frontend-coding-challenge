import { storyblokEditable } from "@storyblok/react";

const TwoColumnSectionMobile = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="two-column-section-mobile">
    <h2>{blok.title}</h2>
    <div className="mobile-columns">
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

export default TwoColumnSectionMobile;
