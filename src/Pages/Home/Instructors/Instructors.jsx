import useData from "../../../Hooks/useData";
import Heading from "../../Shared/Heading/Heading";
import InstructorCard from "../../../Components/InstructorCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../../style.css";

// import required modules
import { EffectCards, FreeMode, Pagination } from "swiper";

const Instructors = () => {
  const [instructors] = useData();
  return (
    <div className="my-32">
      <Heading
        heading={"OUR POPULAR INSTRUCTORS"}
        subHeading={"Staff"}
      ></Heading>

      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {instructors.map((instructor) => (
          <SwiperSlide>
            <InstructorCard instructor={instructor}></InstructorCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Instructors;
