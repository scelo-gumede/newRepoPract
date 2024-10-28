
import Details from "../components/Details";
import PortFolio from "../components/PortFolio";
import Modal from "../components/form/Modal";
import Head from "next/head";

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