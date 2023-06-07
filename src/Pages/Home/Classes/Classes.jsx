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

const Classes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
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
          {data.map((data) => (
            <SwiperSlide>
              <ClassCard data={data}></ClassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Classes;
