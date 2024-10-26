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
        <>
        <head>
                <title>Regular pages | about</title>
                <meta name="description" content="software development company, about us, software solutions, technology services, custom software, website development, mobile app development, client-focused, innovative technology, team expertise
" />
                <meta name="keywords" content="small software development company, about us, custom software development, web development, mobile app solutions, technology services, agile development, innovative software solutions, client-centric approach, software engineering expertise" />

        </head>
        <main>
            {modalshow && (<Modal />)}
            <AboutUsHome />
            <Team value={true} />
            <Help />
            <Details />
        </main>
        </>
    )
}