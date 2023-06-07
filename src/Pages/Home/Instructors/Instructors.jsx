import useData from "../../../Hooks/useData";
import Heading from "../../Shared/Heading/Heading";
import InstructorCard from "./InstructorCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { EffectCards, FreeMode, Pagination } from "swiper";

const Instructors = () => {
  const [instructors] = useData();
  return (
    <div className="mt-8">
      <Heading
        heading={"OUR POPULAR INSTRUCTORS"}
        subHeading={"Staff"}
      ></Heading>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
