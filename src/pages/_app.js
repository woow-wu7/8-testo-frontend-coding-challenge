import "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import DefaultPage from "../components/DefaultPage";
import TwoColumnSection from "../components/TwoColumnSection";
import TwoColumnSectionMobile from "../components/TwoColumnSectionMobile";
import ImageTextSection from "../components/image-text-section";
import Button from "../components/Button";
import Text from "../components/Text";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  "default-page": DefaultPage,
  "image-text-section": ImageTextSection,
  "2-column-section": TwoColumnSection,
  "2-column-section-mobile": TwoColumnSectionMobile,
  button: Button,
  text: Text,
  // "coding-challenge": CodingChallenge,
};

storyblokInit({
  accessToken: "7AYvqGn4sJQV8tWRrG4g7Att",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
