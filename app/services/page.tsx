

import Benefits from "../components/Benefits"
import Details from "../components/Details"
import Services from "../components/Services"
import Modal from "../components/form/Modal";
import Head from "next/head";

export default function Service(){

    return(
        <>
            <Head>
                <title>services | Regular pages</title>
                <meta name="description" content="Explore our services: innovative website design, custom web development, effective digital marketing strategies, and SEO solutions to enhance your online presence." />

                <meta name="keywords" content="website design, web development, digital marketing, SEO, custom web solutions, responsive design, online marketing strategies, search engine optimization, e-commerce development, branding services" />
        </Head>
        <main>
            <Modal />
            <Services />
            <Benefits />
            <Details />
        </main>
        </>
    )
}