import AboutUsHome from "../components/AboutUsHome";
import Details from "../components/Details";
import Team from "../components/Team";


export default function About(){

    return (
        <main>
            <AboutUsHome />
            <Team value={true} />
            <Details />
        </main>
    )
}