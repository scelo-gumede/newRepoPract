"use client"

import Benefits from "../components/Benefits"
import Details from "../components/Details"
import Services from "../components/Services"
import Modal from "../components/form/Modal";
import { useAppSelector } from "@/app/hooks/store"

export default function Service(){
    const modalshow= useAppSelector(state=> state.modal.value)

    return(
        <main>
            {modalshow && (<Modal />)}
            <Services />
            <Benefits />
            <Details />
        </main>
    )
}