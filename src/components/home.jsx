import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpeg";
import four from "../assets/images/four.jpg";
import five from "../assets/images/five.jpg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Home = () => {
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
    <main className="flex flex-col gap-4">
      <div className="pt-[5rem]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          autoPlay={true}
        >
          <img className="w-screen h-[35rem]" src={one} alt="" />
          <img className="w-screen h-[35rem]" src={two} alt="" />
          <img className="w-screen h-[35rem]" src={three} alt="" />
          <img className="w-screen h-[35rem]" src={four} alt="" />
          <img className="w-screen h-[35rem]" src={five} alt="" />
        </Carousel>
      </div>
      <div className="flex items-center justify-start font-semibold text-2xl gap-8 ml-4 mr-4 h-20">
        <Link to="/popular" className="flex justify-center items-center">
          Popular
        </Link>
        <Link to="/trending" className="flex justify-center items-center">
          Trending
        </Link>
        <Link to="/search" className="flex justify-center items-center">
          Search
          <IoSearch />
        </Link>
      </div>
    </main>
  );
};

export default Home;
