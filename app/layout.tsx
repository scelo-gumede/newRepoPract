
import "./globals.css";
import Footer from "./components/Footer";
import Provider from "./hooks/Provider";
import SmallNavBar from "./components/SmallNavBar";
import NavBarConf from "./components/NavBarConf";
import { Metadata } from "next";
import Whatsapp from "./components/Whatsapp";
import Head from "next/head";


export const metadata:Metadata = {
    title: {
    default: "Regular Pages - Expert SEO & Digital Marketing",
    template: "%s - Regular Pages | Your Partner in Digital Success",
    }
  ,
    description: "Elevate your online presence with our expert SEO and digital marketing services. We specialize in driving traffic, boosting conversions, and helping businesses thrive in the digital landscape. Partner with us to achieve measurable results and grow your brand effectively.",
    keywords: "web development, UI/UX design, cybersecurity solutions, custom web applications, responsive design, e-commerce development, mobile app development, digital transformation, user-centric design, website optimization, SEO services, secure web hosting, brand identity design, software development, online marketing solutions",
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
          <Head>
          <meta name="msvalidate.01" content="CF926693516941D2542C86EFAA6D8262" />
          </Head>
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