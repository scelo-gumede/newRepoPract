"use client"
import { useRef,useEffect,useState } from "react";
import clsx from "clsx";
import Navbar from "./Navbar";


export default function NavBarConf(){
    const position = useRef<HTMLDivElement | null>(null);
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
          const rect = position.current?.getBoundingClientRect();
          const newTop = window.scrollY;

          if (rect) {
              setShowSecondaryNavbar(newTop > rect.bottom+200);
          }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

    return (
        <header className="">
              <div ref={position} className="z-10   h-full">
                  <Navbar color={false}/>
              </div>

              <div  
              className={clsx("transition  fixed  duration-300  w-full ease-in delay-75 -translate-y-[200%] ", {
                  "-translate-y-full opacity-70 z-10  ": showSecondaryNavbar ==true
              })}>
                  <Navbar color={true} />
              </div>
              </header> 
    )
}