import Carousel from "react-bootstrap/Carousel";
import "./BootstrapCarousel.css";

const BootstrapCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="carosel-img"
          alt="banner"
          src="/staticImages/banner.png"
          srcSet="/staticImages/banner-mobile.png 550w, /staticImages/banner.png 1000w"
          sizes="(min-width: 700px) 100vw, 10vw"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carosel-img"
          alt="banner"
          src="/staticImages/banner-2.png"
          srcSet="/staticImages/banner-2.png 1000w, /staticImages/banner-2-mobile.png 550w"
          sizes="(min-width: 550px) 100vw, 10vw"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
