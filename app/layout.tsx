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
      <Provider store={store}>
      <html style={{scrollBehavior:"smooth"}} lang="en">
          <head>

          <title>Web Development | Web Design | Digital Marketing| & SEO - Regular Pages</title>
        <meta name="description" content="We specialize in web development, website design, SEO optimization, and digital marketing services." />
        <meta name="keywords" content="web development, website design, SEO optimization, digital marketing, image editing" />
        <meta name="author" content="Regular Pages" />
        <link rel="icon" href="/logo2.svg" />
        <link rel="canonical" href="https://www.regularpages.com/" />
        <meta property="og:title" content="Web Development Company - Regular Pages" />
        <meta property="og:description" content="We offer professional web development, website design,image editing ,SEO optimization, and digital marketing." />
        <meta property="og:image" content="https://www.regularpages.com/logo2.svg" />
        <meta property="og:url" content="https://www.regularpages.com/" />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Regular Pages",
      "url": "https://www.regularpages.com",
      "logo": "https://www.regularpages.com/logo2.svg",  // Correct URL after moving to public
      "sameAs": [
        "https://www.facebook.com/yourprofile",
        "https://www.twitter.com/yourprofile",
        "https://www.linkedin.com/in/yourprofile"
      ],
      "image": "https://www.regularpages.com/logo2.svg"  // Correct URL after moving to public
    })
  }}
/>

              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
              <style>
                  {`
                      .navbar {
                          transition: transform 1s ease, opacity 0.3s ease;
                          transform: translateY(-100%);
                          opacity: 0;
                      }
                      .navbar.show {
                          transform: translateY(-50);
                          opacity: 0.7;
                      }
                      
                  `}
              </style>

          </head>
          <body className="relative">
                
                <SmallNavBar />
            <header className="">
              <div ref={position} className="z-10 h-full">
                  <Navbar color={false}/>
              </div>

              <div className={clsx("navbar z-10 w-full fixed", {
                  show: showSecondaryNavbar
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