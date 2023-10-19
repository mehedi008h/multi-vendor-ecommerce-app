// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const CategorySlider = () => {
    return (
        <div className="h-[30vh] mt-3">
            <Swiper
                slidesPerView={8}
                spaceBetween={25}
                pagination={false}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-md"
            >
                {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18,
                ]?.map((image, i) => (
                    <SwiperSlide key={i}>
                        <div className="h-[30vh] w-40 bg-[#FFF4F6] border rounded-md flex flex-col justify-center items-center hover:shadow-lg hover:border-teal-200 cursor-pointer">
                            <div className="h-16 w-16 rounded-lg bg-black mb-3"></div>
                            <h1 className="font-semibold">Eid Collections</h1>
                            <p className="text-sm text-gray-500">26 item</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategorySlider;
