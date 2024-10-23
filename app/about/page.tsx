import AboutUsHome from "../components/AboutUsHome";
import Details from "../components/Details";
import Help from "../components/Help";
import Team from "../components/Team";


export default function About(){

    return (
        <main>
            <AboutUsHome />
            <Team value={true} />
            <Help />
            <Details />
        </main>
    )
}