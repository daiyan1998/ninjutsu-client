import React, { useEffect, useState } from "react";
import ClassCard from "../../../Components/ClassCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Heading from "../../Shared/Heading/Heading";
import useData from "../../../Hooks/useData";

const Classes = () => {
  const [instructors] = useData();
  console.log("instructors:", instructors);

  return (
    <div className="my-32">
      <Heading
        heading={"POPULAR TRAINING PROGRAMS"}
        subHeading={"Choose the Class"}
      ></Heading>
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
          className="mySwiper h-full w-full"
        >
          {instructors?.map((instructor) => (
            <SwiperSlide>
              <ClassCard
                key={instructor._id}
                instructor={instructor}
              ></ClassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Classes;
