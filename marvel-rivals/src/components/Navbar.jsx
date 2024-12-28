import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/images/logo.png";
import music from "../../public/audio/music.mp3";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicaterActive, setIsIndicaterActive] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScroll } = useWindowScroll();

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicaterActive((prev) => !prev);
  };
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    }
    else{
      audioElementRef.current.pause();
    }
  });

  useEffect(() => {
    if (currentScroll === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
      navContainerRef.current.classList.remove("hidden");
      
    } 
    else if (currentScroll > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.remove("floating-nav");
      navContainerRef.current.classList.add("hidden");
      
    } 
    else if (currentScroll < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
      navContainerRef.current.classList.remove("hidden");
      
    }
    setLastScrollY(currentScroll);
  }, [currentScroll]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const navItems = ["Hero", "About", "Characters", "News"];
  const bars = [
    [1, "rgb(153, 0, 0)"], // Dark red
    [2, "rgb(204, 0, 0)"], // Medium dark red
    [3, "rgb(255, 51, 51)"], // Bright red
    [4, "rgb(255, 102, 102)"], // Light red
  ];
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src={logo} className="w-10"></img>
          </div>

          <div className="flex h-full items-center">
            {navItems.map((item) => (
              <a
                className="nav-hover-btn "
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
            <button
            className="ml-10 flex items-center space-x-0.5"
            onClick={toggleAudio}
          >
            <audio ref={audioElementRef} src={music} className="hidden" loop></audio>
            {bars.map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${
                  isIndicaterActive ? "active" : ""
                } `}
                style={{
                  animationDelay: `${bar[0] * 0.1}s`,
                  backgroundColor: bar[1],
                }}
              ></div>
            ))}
          </button>
          </div>
   
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
