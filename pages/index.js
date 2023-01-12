import react from "react";
import { useState } from "react";
import router from "next/router";
import Image from "next/image";
import Button from "../components/Button";

import image from "../image";

const ButtonGroup = (isMobile) => {
  return (
    <div className="flex flex-row">
    <Button
      btnName="About us"
      classStyles={`z-10 mx-4 rounded-xl active:scale-110 duration-100 ${
        isMobile && 'text-2xl px-16 py-4 sm:px-8 sm:py-2 sm:text-xl'
      }`}
      handleClick={() => {
        router.push('/aboutus');
      }}
      cancelBg
    />

    <Button
      btnName="Login up"
      classStyles={`z-10 mx-4 rounded-xl active:scale-110 duration-100 ${
        isMobile && 'text-2xl px-16 py-4 sm:px-8 sm:py-2 sm:text-xl'
      }`}
      handleClick={() => {
        router.push('/login')
      }}
    />
    </div>
  )
};

const Home = () => {
    return (
        <div className="relative w-full h-screen sm:h-48">
        <Image
          src={image.bg}
          className="w-full "
          layout="fill"
          objectFit="cover"
        />
        
        <div className="flex items-center px-10 h-64 sm:h-52 xs:h-48 rounded-3xl">
        <div className="flex flex-col mt-80">
          <p className="z-10 w-3/4 text-5xl font-bold text-white md:text-4xl sm:text-3xl xs:text-xl mt-12">
            VIET NGUYEN FOODS COMPANY LIMITED (VNFOODSCO)
          </p>

          <p className="z-10 w-full text-3xl font-poppin text-white mt-16">
          Our mission is “Premium Quality, Competitive Prices, Professional Services”
          </p>

          <div className="mt-12">
          <ButtonGroup isMobile />
        </div>
        </div>
        </div>
      </div>
    )
}

export default Home;