import React from "react";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

export interface LayoutWrapperProps {
  children: React.ReactNode;
  locale: string;
}

const LayoutWrapper = async ({ children, locale }: LayoutWrapperProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
