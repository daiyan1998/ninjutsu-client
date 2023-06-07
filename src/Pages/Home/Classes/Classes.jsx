import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
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
  const { instructors } = useData;

  return (
    <>
      <Heading
        heading={"POPULAR TRAINING PROGRAMS"}
        subHeading={"Choose the Class"}
      ></Heading>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-full w-full"
        >
          {instructors.map((instructor) => (
            <SwiperSlide>
              <ClassCard
                key={instructor._id}
                instructor={instructor}
              ></ClassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Classes;
