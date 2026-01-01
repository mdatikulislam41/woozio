import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/api";
import { Link } from "react-router";
const Slider = () => {
  const {
    data: slider,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: fetchCategories,
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <Swiper
      navigation={true}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      loop={true}
      parallax={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {slider.data.map((item) => (
        <SwiperSlide className="min-h-96 relative">
          <button className="absolute z-1 inset-0 cursor-pointer">
            {item}
          </button>
          <img
            src="/slide1.jpeg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
