import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import aboutSectionIMG from '../../public/images/aboutSectionIMG.png'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: 'bottom center',
                scrub: 0.5,
                pin: true,
                pinSpacing:true
            }
        })

        clipAnimation.to('.mask-clip-path',{
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

  return (
    <section id='about' className=' min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center'>
        <p className='font-bold font-circular-web text-sm'>Welcome to Marvel Rivals</p>
        <div className='text-center mt-5 text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[5rem] font-bold font-zentry'>
          <h1>
            Marvel legends 
          </h1>
          <hi> clash in epic arenas</hi>
        </div>
        <div className='absolute bottom-[-80dvh] uppercase text-lg text-center font-circular-web'>
        <p>Step into the battlefield where Marvel heroes collide,</p>
        <p>team up and dominate action-packed arenas!</p>
      </div>
      </div>

<div id='clip' className='h-dvh w-screen'>
    <div className='mask-clip-path about-image'>
            <img src={aboutSectionIMG} className='absolute left-0 top-0 size-full object-cover' ></img>
            </div>
      </div>


    </section>
  );
};

export default About;
