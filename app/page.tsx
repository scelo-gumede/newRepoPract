import AboutUsHome from "./components/AboutUsHome"
import Details from "./components/Details"
import Form from "./components/Form"
import Hero from "./components/Hero"
import ItSolution from "./components/ItSolution"
import OurPortfolio from "./components/OurPortfolio"
import Recognition from "./components/Recognitions"
import Team from "./components/Team"


export default function Home(){

  return (
    <main>
      <Hero />
      <AboutUsHome />
      <ItSolution />
      <OurPortfolio />
      <Recognition />
      <Team value={false}/>
      <Form />
      <Details />
    </main>
  )
}