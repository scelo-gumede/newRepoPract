
import Details from "../components/Details";
import PortFolio from "../components/PortFolio";
import Modal from "../components/form/Modal";
import Head from "next/head";
import { Metadata } from "next";


export const metadata:Metadata={
      title: "Proven Results in Digital Marketing,Website develpment & SEO",
      description: "Explore our portfolio at Regular Pages, featuring successful projects in Website development,SEO and digital marketing. Discover how we’ve helped businesses like yours achieve their goals through tailored strategies and innovative solutions. Let our work speak for itself."

      
}

export default function Portfolio(){
    return (
        <>
        <Head>
                <title>portfolio | Regular pages</title>
                <meta name="description" content="Explore our company portfolio, featuring successful projects in web development, branding, and digital marketing. Let's create together!" />
                <meta name="keywords" content="portfolio, web development, React, UI design, e-commerce" />
        </Head>
    
        <main>
            <Modal />
            <PortFolio />
            <Details />
        </main>
    
        </>
    )
}