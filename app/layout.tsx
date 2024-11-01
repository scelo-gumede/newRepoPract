
import "./globals.css";
import Footer from "./components/Footer";
import Provider from "./hooks/Provider";
import SmallNavBar from "./components/SmallNavBar";
import NavBarConf from "./components/NavBarConf";
import { Metadata } from "next";
import Whatsapp from "./components/Whatsapp";


export const metadata:Metadata = {
    title: {
    default: "Regular Pages - Expert SEO & Digital Marketing",
    template: "%s - Regular Pages | Your Partner in Digital Success",
    }
  ,
    description: "Elevate your online presence with our expert SEO and digital marketing services. We specialize in driving traffic, boosting conversions, and helping businesses thrive in the digital landscape. Partner with us to achieve measurable results and grow your brand effectively.",

    twitter:{
      card:"summary_large_image",
    },
    
    openGraph: {
        title: "Regular Pages - Expert Website development, SEO & Digital Marketing",
        description: "Elevate your online presence with Regular Pages. We provide expert SEO, website development and digital marketing services that drive traffic, boost conversions, and help your business thrive.",
        url: "https://www.regularpages.com", 
        type: "website",
        siteName:"Regular pages"
      }
      

    

  };
  

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <Provider >
      <html style={{scrollBehavior:"smooth"}} lang="en">
            
          <body className="relative">
               
                <Whatsapp />
                
                <SmallNavBar />
                <NavBarConf />
                {children}
                <Footer />
          </body>
      </html>
         </Provider>
  );
}