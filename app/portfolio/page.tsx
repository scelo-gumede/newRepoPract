"use client"
import Details from "../components/Details";
import PortFolio from "../components/PortFolio";
import Modal from "../components/form/Modal";
import { useAppSelector } from "@/app/hooks/store"

export default function Portfolio(){
    const modalshow= useAppSelector(state=> state.modal.value)

    return (
        <>
        <head>
                <title>portfolio | Regular pages</title>
                <meta name="description" content="Explore our company portfolio, featuring successful projects in web development, branding, and digital marketing. Let's create together!" />
                <meta name="keywords" content="portfolio, web development, React, UI design, e-commerce" />
        </head>
    
        <main>
            {modalshow && (<Modal />)}
            <PortFolio />
            <Details />
        </main>
    
        </>
    )
}