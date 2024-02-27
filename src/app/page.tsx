import Carousel from "../../components/home/carousel/Carousel";
import MotiveSection from "../../components/home/motive/MotiveSection";
import NewsSection from "../../components/home/event-section/NewsSection";
import MessageSection from "../../components/home/message-section/MessageSection";
import TeamsSection from "../../components/home/team/TeamsSection";
import NewsLetter from "../../components/home/news-subscribe/NewsLetter";
import { sanityClient } from "../../utils/sanity/client";
import { NewsData } from "../../types/events";

async function getNewsSectionPost() {
  const res = await sanityClient.fetch<NewsData[]>(
    `*[_type=="blog"] | order(_createdAt desc)[0...4] {
    title,
    cardInfoText,
    readTime,
    author,
    _id,
    mainImage,
    slug
  }`
  );

  return res;
}

const Home = async () => {
  const newsSectionPost = await getNewsSectionPost();

  return (
    <>
      <Carousel />
      <MessageSection />
      <MotiveSection />
      <TeamsSection />
      <NewsSection newsData={newsSectionPost} />
      <NewsLetter />
    </>
  );
};

export default Home;
