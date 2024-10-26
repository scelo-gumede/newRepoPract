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
import { useState,useEffect } from "react"





export default function Home(){
  const modalshow= useAppSelector(state=> state.modal.value)
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);
  

  return (
    <>
    
    <head>
                <title>home | Regular pages </title>
                <meta name="description" content="Welcome to regular pages,software development company specializing in innovative website design, custom web development, digital marketing, and SEO solutions to elevate your business online." />

                <meta name="keywords" content="software development, website design, web development, digital marketing, SEO, custom software solutions, online presence, small business technology, innovative web solutions, technology consulting" />

    </head>
    
    {
      isMounted && (
        <main>
    {isMounted && modalshow && <Modal />}
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
    </>
  )
}