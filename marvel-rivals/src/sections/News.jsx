import BentoTilt from "../components/BentoTilt";
import BentoCard from "../components/BentoCard";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const News = () => {

    const titleRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.set(titleRef.current, { opacity: 0, y: 50 });


        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top center",
              end: "+=300",
              scrub: 1,
            }
          });
      
          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          })
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };
    },[])

    return (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          <span className="text-red-coral-red inline-block">Marvel Rivals</span>: Assemble Your Heroes!
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Welcome to Marvel Rivals, an action-packed hero shooter game that lets
          you dive into the Marvel Universe like never before! Choose your
          favorite heroes, each equipped with unique powers, and battle it out
          in epic arenas. Team up with allies or face rivals head-on to prove
          who reigns supreme in the ultimate superhero showdown.
        </p>
      </div>
   
      <BentoTilt  className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]" >
        <BentoCard 
          ref={titleRef}
          imgSRC="images/comic-con.png"
          title={
            <>
            </>
          }
          description=""
        />
      </BentoTilt>
   

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            imgSRC="images/4k.jpg"
            title={
              <>
                Competitive Mode is Here!
              </>
            }
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            vidSRC="videos/Venom.mp4"
            title={
              <>
                
              </>
            }
            description="."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            vidSRC="videos/jeff.mp4"
            title={
              <>
             
              </>
            }
            description=""
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            imgSRC="images/future-chars.jpg"
            title={
              <>
                 M<b>o</b>re Characters co<b>m</b>ing s<b>o</b>on
              </>
            }
            description=""
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/Trailer.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
)};

export default News;
