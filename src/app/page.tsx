"use client";
import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Hero from "@/app/Components/Hero";

const page = () => {
  return (
    <div className={`w-full h-screen relative`}>
        <NavBar />
        <Banner/>
        <Hero/>
    </div>
  )
}

export default page