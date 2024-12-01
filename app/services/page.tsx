

import Benefits from "../components/Benefits"
import Details from "../components/Details"
import Services from "../components/Services"
import Modal from "../components/form/Modal";
import Head from "next/head";
import { Metadata } from "next";
import Form from "../components/Form";

export const metadata:Metadata={
    title:"Comprehensive Website development,SEO & Digital Marketing Solutions",
      description: "At Regular Pages, we offer a full range of Website development,SEO and digital marketing services designed to enhance your online presence and drive growth. From search engine optimization,website design, content marketing to social media management and analytics, our expert team is dedicated to delivering customized strategies that yield measurable results. Explore our services and see how we can help your business succeed."

      
}


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
            <Form />
            <Details />
        </main>
        </>
    )
}