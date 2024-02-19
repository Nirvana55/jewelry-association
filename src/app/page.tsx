import Carousel from "../../components/carousel/Carousel";
import MotiveSection from "../../components/Motive/MotiveSection";
import GraphSection from "../../components/graph/Graph";
import NewsSection from "../../components/NewsSection/NewsSection";
import MessageSection from "../../components/MessageSection/MessageSection";
import TeamsSection from "../../components/team/TeamsSection";
import NewsLetter from "../../components/HomeNewsSubscribe/NewsLetter";

export default function Home() {
  return (
    <>
      <Carousel />
      <MessageSection />
      {/* <GraphSection /> */}
      <MotiveSection />
      <TeamsSection />
      <NewsSection />
      <NewsLetter />
    </>
  );
}
