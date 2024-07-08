import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/swiperstyle.css";
import { Swiper as SwiperTypes } from "swiper/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import SliderNavigationButton from "@/app/components/Slider/SliderNavigationButton";

export const SliderImages = ["/image/Frameone.png", "/video/video.mp4"];
const Slider = () => {
  const [ActiveSlider, setActiveSlider] = useState<SwiperTypes | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const params = useParams();
  return (
    <>
      <Swiper
        initialSlide={0}
        onSwiper={(swiper) => setActiveSlider(swiper)}
        speed={800}
        onSlideChange={() => setActiveIndex(ActiveSlider?.realIndex as number)}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/image/Frameone.png"}
            alt={"/image/Frameone.png"}
            fill={true}
            loading={"eager"}
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
        {/*{SliderImages.map((sliderItem: string, sliderIndex: number) => (*/}
        {/*  <SwiperSlide key={sliderIndex}>*/}
        {/*    {sliderItem.endsWith(".mp4") ? (*/}
        {/*      <video autoPlay muted loop>*/}
        {/*        <source src={sliderItem} type="video/mp4" />*/}
        {/*      </video>*/}
        {/*    ) : (*/}
        {/*      <Image*/}
        {/*        src={sliderItem}*/}
        {/*        alt={sliderItem}*/}
        {/*        width={400}*/}
        {/*        height={400}*/}
        {/*      />*/}
        {/*      // <image src={sliderItem} />*/}
        {/*    )}*/}
        {/*  </SwiperSlide>*/}
        {/*))}*/}
      </Swiper>
      <SliderNavigationButton
        ActiveSlider={ActiveSlider}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default Slider;
