"use client"

import { useRef,useEffect,useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import clsx from "clsx";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import SmallNavBar from "./components/SmallNavBar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const position = useRef<HTMLDivElement | null>(null);
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const rect = position.current?.getBoundingClientRect();
          const newTop = window.scrollY;

          if (rect) {
              setShowSecondaryNavbar(newTop > rect.bottom);
          }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
      <html lang="en">
          <head>
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
              <style>
                  {`
                      .navbar {
                          transition: transform 0.3s ease, opacity 0.3s ease;
                          transform: translateY(-100%);
                          opacity: 0;
                      }
                      .navbar.show {
                          transform: translateY(-50);
                          opacity: 1;
                      }
                  `}
              </style>
          </head>
          <body className="relative">
            <Provider store={store}>

              <SmallNavBar />
            <header className="">
              <div ref={position} className="z-10 h-full">
                  <Navbar />
              </div>

              <div className={clsx("navbar z-10 w-full fixed", {
                  show: showSecondaryNavbar
              })}>
                  <Navbar />
              </div>
              </header> 
              <div>
                  {children}
              </div>

              <Footer />
              </Provider>
          </body>
      </html>
  );
}