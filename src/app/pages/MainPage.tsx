"use client";

import GoalSection from "@/app/components/gola-section/GoalSection";
import AboutUsSection from "@/app/components/about-us/AboutUsSection";
import SliderContainer from "@/app/components/Slider/SliderContainer";
import ContactUsSection from "@/app/components/contact-us-section/ContactUsSection";

const MainPage = () => {
  return (
    <>
      <SliderContainer />
      <AboutUsSection />
      <GoalSection />
      <ContactUsSection />
    </>
  );
};

export default MainPage;
