"use client";
import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Hero from "@/app/Components/Hero";
import Footer from "@/app/Components/Footer";

const page = () => {
  return (
    <div className={`w-full h-screen relative`}>
        <NavBar />
        <Banner/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default page