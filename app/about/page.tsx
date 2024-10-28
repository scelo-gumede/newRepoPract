
import AboutUsHome from "../components/AboutUsHome";
import Details from "../components/Details";
import Help from "../components/Help";
import Team from "../components/Team";
import Modal from "../components/form/Modal";
import Head from "next/head"

export default function About(){
    

    return (
        <>
        <Head>
                <title>about | Regular pages</title>
                <meta name="description" content="software development company, about us, software solutions, technology services, custom software, website development, mobile app development, client-focused, innovative technology, team expertise
                " />
                <meta name="keywords" content="small software development company, about us, custom software development, web development, mobile app solutions, technology services, agile development, innovative software solutions, client-centric approach, software engineering expertise" />

        </Head>
        <main>
            <Modal />
            <AboutUsHome />
            <Team value={true} />
            <Help />
            <Details />
        </main>
        </>
    )
}