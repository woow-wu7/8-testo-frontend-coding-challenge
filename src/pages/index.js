import Head from "next/head";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

// MARK 2 - story
export default function Home({ story }) {
  story = useStoryblokState(story);
  console.log("=======Story: ", story);

  return (
    <div>
      <Head>
        <title>Testo Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Demonstrating PC and Mobile layouts for Image Text Section"
        />
      </Head>

      {/* 1 */}
      {/* Render Storyblok DefaultPage Component */}
      {story && story.content && <StoryblokComponent blok={story.content} />}

      {/* 2 */}
      {/* Fallback content If StoryBlok is empty */}
      {!story && (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Testo Frontend Challenge
            </h1>

            <div className="space-y-16">
              {/* PC  */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  PC Header
                </h2>
                <p className="text-gray-600 text-center mb-8">PC Content</p>
              </div>

              {/* Mobile */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Mobile Header
                </h2>
                <p className="text-gray-600 text-center mb-8">Mobile Content</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// MARK 1 - coding-challenge
export async function getStaticProps() {
  let slug = "coding-challenge";

  let sbParams = {
    version: "published",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  console.log("======= coding-challenge: ", data);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 10,
  };
}
