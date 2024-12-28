import { useEffect, useRef } from "react";
import { useState } from "react";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  gsap.registerPlugin(ScrollTrigger);



  const totVideos = 3;
  const nextVdRef = useRef(null);

  const getVideoSrc = (index) => `videos/hero${(index % totVideos) + 1}.mp4`;

  const handleMiniVidClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totVideos);
  };

  const handleMiniVidLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useGSAP( () => {
    gsap.set('#video-frame', {
    clipPath: 'polygon(14% 0, 72% 0, 90% 90%, 0% 100%)',
    borderRadius:'0 0 40% 10%',
    })

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
      borderRadius:'0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }

    })
  });


  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );



  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVidClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
                {/* preview video */}
              <video
                ref={nextVdRef}
                src={getVideoSrc((currentIndex % totVideos) + 1)}
                autoPlay
                loop
                muted
                id="current-video"
                className="size-64 origin-center object-cover object-center scale-150"
                onLoadedData={handleMiniVidLoaded}
              />
            </div>
          </div>
          {/* main video */}
     
            <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleMiniVidLoaded}
          />
          <video
            autoPlay
            src={getVideoSrc(
                currentIndex === totVideos - 1 ? 1 : currentIndex
              )}
            loop
            muted
            className=" absolute  left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleMiniVidLoaded}
          />
        </div>
        <h1 className=" special-font absolute z-40 bottom-2 right-2 text-blue-75 text-9xl">
          Hero Showdown
        </h1>
       
        <div className="absolute left-0 top-3 z-40 size-full">
          <div className="flex mt-24 px-5 md:px-10 flex-col">
            <h3 className="special-font font-zentry text-blue-75 text-6xl">
              <span className="text-red-coral-red inline-block">Marvel</span> Rivals
            </h3>
            <p className="special-font font-robert-medium font-bold text-blue-75">
              Rise Above the Chaos in Marvel Rivals!
            </p>
            <Button />
          </div>
        </div>
      </div>
      <h1 className=" special-font absolute  bottom-2 right-2  text-9xl">
          Hero Showdown
        </h1>
    </section>
  );
};

export default Hero;
