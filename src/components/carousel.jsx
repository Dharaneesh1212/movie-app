import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.jpg";
import five from "../assets/images/five.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousels = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <main>
      <div className="carousel">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          autoPlay={true}
        >
          <img id="img" className="w-screen h-[35rem]" src={one} alt="" />
          <img id="img" className="w-screen h-[35rem]" src={two} alt="" />
          <img id="img" className="w-screen h-[35rem]" src={three} alt="" />
          <img id="img" className="w-screen h-[35rem]" src={four} alt="" />
          <img id="img" className="w-screen h-[35rem]" src={five} alt="" />
        </Carousel>
      </div>
    </main>
  );
};

export default Carousels;
