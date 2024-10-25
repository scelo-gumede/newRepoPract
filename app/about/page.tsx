"use client"
import AboutUsHome from "../components/AboutUsHome";
import Details from "../components/Details";
import Help from "../components/Help";
import Team from "../components/Team";
import Modal from "../components/form/Modal";
import { useAppSelector } from "@/app/hooks/store"

export default function About(){
    const modalshow= useAppSelector(state=> state.modal.value)

    return (
        <main>
            {modalshow && (<Modal />)}
            <AboutUsHome />
            <Team value={true} />
            <Help />
            <Details />
        </main>
    )
}