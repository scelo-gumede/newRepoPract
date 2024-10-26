"use client"

import Benefits from "../components/Benefits"
import Details from "../components/Details"
import Services from "../components/Services"
import Modal from "../components/form/Modal";
import { useAppSelector } from "@/app/hooks/store"

export default function Service(){
    const modalshow= useAppSelector(state=> state.modal.value)

    return(
        <>
            <head>
                <title>services | Regular pages</title>
                <meta name="description" content="Explore our services: innovative website design, custom web development, effective digital marketing strategies, and SEO solutions to enhance your online presence." />

                <meta name="keywords" content="website design, web development, digital marketing, SEO, custom web solutions, responsive design, online marketing strategies, search engine optimization, e-commerce development, branding services" />
        </head>
        <main>
            {modalshow && (<Modal />)}
            <Services />
            <Benefits />
            <Details />
        </main>
        </>
    )
}