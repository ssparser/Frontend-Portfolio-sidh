import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../data/Index";
import { shoes } from "../data/Index";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

import { useState } from "react";
import Typewriter from "../components/Typewriter";

function Hero() {
  const [Bigshoe, setBigShoeIMG] = useState(bigShoe1);


  return (
    <section
      id="home"
      className="w-full p-2 flex xl:flex-row flex-col min-h-screen justify-center gap-10 max-container"
    >
      <div className="relative flex flex-col items-start justify-center xl:w-2/5 w-full max-xl:padding-x ">
        <p className="text-coral-red text-4xl">Our collection</p>
        <h1 className="mt-8 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap ">
            New Arrivals
          </span>
          <br />
          <Typewriter/> Shoes
        </h1>
        <p className="font-montserrat mx-3 my-3 italic">
          <span className="text-red-700 inline-block">NonVeg</span>-
          <span className="text-green-700 inline-block">Veg</span> is India's
          first multi-brand sneaker store.
        </p>
        <Button prop={arrowRight} label={"Shop now"} />
        <div className="flex flex-row justify-start items-start mt-20 flex-wrap w-full gap-16 font-palanquin">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-start justify-center ">
        <div
          className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl
                left-0 top-1/3 -translate-y-1/2 md:left-10"
        />
        <div
          className="absolute w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl
                right-0 top-1/3 -translate-y-1/2"
        />
        <div
          className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl
                left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2"
        />

        <img src={Bigshoe} className=" w-10/12 z-10 ml-10"></img>

        <div className="flex flex-row justify-center items-center gap-5 mt-20 ml-10">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeIMG={(shoe) => setBigShoeIMG(shoe)}
                bigShoeIMG={Bigshoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
