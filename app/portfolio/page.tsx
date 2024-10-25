"use client"
import Details from "../components/Details";
import PortFolio from "../components/PortFolio";
import Modal from "../components/form/Modal";
import { useAppSelector } from "@/app/hooks/store"


export default function Portfolio(){
    const modalshow= useAppSelector(state=> state.modal.value)

    return (
        <main>
            {modalshow && (<Modal />)}
            <PortFolio />
            <Details />
        </main>
    )
}