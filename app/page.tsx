"use client"
import AboutUsHome from "./components/AboutUsHome"
import Details from "./components/Details"
import Form from "./components/Form"
import Modal from "./components/form/Modal"
import Hero from "./components/Hero"
import ItSolution from "./components/ItSolution"
import OurPortfolio from "./components/OurPortfolio"
import Recognition from "./components/Recognitions"
import Team from "./components/Team"
import { useAppSelector } from "./hooks/store"


export default function Home(){
  const modalshow= useAppSelector(state=> state.modal.value)
  
  return (
    <main className="">
      {modalshow && (<Modal />)}

     
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