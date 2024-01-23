import Carousel from "../../components/carousel/Carousel";
import FooterBar from "../../components/footer/Footer";
import GraphSection from "../../components/graph/Graph";
import Navbar from "../../components/navbar/Navbar";
import NetworkSection from "../../components/network/Network";
import TopicsBar from "../../components/topics/Topics";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <TopicsBar />
      <GraphSection />
      <NetworkSection />
      <FooterBar />
    </>
  );
}
