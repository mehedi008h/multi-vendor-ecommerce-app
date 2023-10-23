import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const EventSlider = () => {
    return (
        <div className="border rounded-md h-[250px]">
            <Swiper
                spaceBetween={25}
                pagination={true}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-md"
            >
                {[1, 2, 3, 4, 5]?.map((image, i) => (
                    <SwiperSlide key={i}>
                        <div className="h-[248px] w-full bg-[#FFFFFF] cursor-pointer">
                            {" "}
                            {image}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default EventSlider;
