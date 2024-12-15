import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const Quality = () => {
  return (
    <section id="quality" className="max-container  mt-10 flex justify-between gap-20 items-center w-full md:flex-col xl:flex-row ">
        <div className="flex flex-col justify-start">
          <h1 className="font-palanquin text-4xl font-bold flex-1 xl:max-w-xl md:max-w-sm">
            We Provide You{" "}
            <span className="text-coral-red inline-block">Super Quality</span>{" "}
            Shoes
          </h1>
          <p className="font-montserrat italic text-slate-gray mt-7 xl:max-w-xl lg:max-w-md">
            Step into comfort and style with our premium-quality shoes, designed
            to elevate your every step. Crafted with precision and care, our
            collection ensures durability and unmatched elegance for every
            occasion. Whether you're chasing goals or strolling through life,
            our shoes keep you ahead in comfort and fashion. Discover the
            perfect pair to complement your journey today!
          </p>
          <div className="mt-5">
          <Button label={'More Info'}></Button>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
            <img src={shoe8} className="h-[570px] w-[570px] object-contain"/>
        </div>
    </section>
  );
};

export default Quality;
