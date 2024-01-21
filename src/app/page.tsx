import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar/Navbar";
import { CommonContainerStyle } from "../../styles/layoutStyles";

export default function Home() {
  return (
    <>
      <CommonContainerStyle>
        <Navbar />
      </CommonContainerStyle>
      <Carousel />
    </>
  );
}
