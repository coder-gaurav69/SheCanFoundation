import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Stats from '../Component/Stats';
import WhyChooseUs from "../Component/WhyChooseUs";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";

export default function LandingPage() {
  return (
    <div className=" rounded-2xl overflow-hidden shadow-xl bg-[#f6fafe] border-2 border-[#eaedfa]">
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
     <Footer/>
    </div>
  );
}
