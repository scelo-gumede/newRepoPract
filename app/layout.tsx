"use client"

import { useRef,useEffect,useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import clsx from "clsx";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import SmallNavBar from "./components/SmallNavBar";
import Head from "next/head";



export default function RootLayout({ children }: { children: React.ReactNode }) {
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

    console.log(showSecondaryNavbar)

  return (
      <Provider store={store}>
      <html style={{scrollBehavior:"smooth"}} lang="en">
          <Head>
            <title></title>
          </Head>
          <body className="relative">
                
                <SmallNavBar />
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
              
              
              <div>
                  {children}
              </div>

              <Footer />
          </body>
      </html>
              </Provider>
  );
}