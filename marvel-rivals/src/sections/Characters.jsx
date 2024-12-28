import { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CharacterCard from "../components/CharacterCard";
import { charactersData } from "../../public/images/Index";
import BentoTilt from '../components/BentoTilt';

const Characters = () => {
  const [hero, setHero] = useState(charactersData[0]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#chars', { opacity: 0, y: 50 });
    gsap.set('#info-section', { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#chars-section",
        start: "top center",
        end: "+=300",
        scrub: 1,
      }
    });

    tl.to('#chars', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to('#info-section', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, "-=0.5"); 

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleHeroChange = (character) => {
    gsap.to('#info-section', {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        setHero(character);
        gsap.to('#info-section', {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });
  };

  return (
    <section 
      id="chars-section"
      className="w-screen h-dvh relative flex flex-col"
    >
        <div className='text-center mt-8 font-zentry text-5xl'>
            <h1>characters</h1>
        </div>
        <div className=' flex flex-row justify-between gap-10 items-center md:flex-row sm:flex-col'>
      <div 
        className="grid grid-cols-4 grid-rows-4 gap-5 ml-10 cursor-pointer xs:grid-cols-1" 
        id="chars"
      >
        {charactersData.map((character, index) => (      
          <CharacterCard
            key={index}
            image={character.img}
            hueColor={character.hueColor}
            onClick={() => handleHeroChange(character)}
          />
        ))}
      </div>

      <BentoTilt>
      <div className="flex flex-col items-center mr-36 w-96" id='info-section'>
        <div className="h-[70vh] w-full overflow-hidden rounded-3xl md:w-[30vw] items-center mb-5">
          <img
            src={hero.img}
            className="size-full object-cover"
            alt={hero.name}
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <h5 className="font-circular-web text-lg text-center">
            {hero.name}
          </h5>
          <p className="text-slate-500 italic text-center break-words">
            {hero.description}
          </p>
        </div>
      </div>
      </BentoTilt>
      </div>
    </section>
  );
};

export default Characters;