"use client"

import clsx from "clsx"

import General from "./Form1"
import ProjectDetails from "./Form2"

export default function Modal(){
    

    return(
        <>
            
                    <main style={{background:"rgba(0,0,0,0.5)"}} className={clsx("absolute w-[100vw] flex justify-center items-center h-[100vh]  left-0 top-0")}>
                        <ProjectDetails />
                    </main>
                
           
        
        
        </>
    )
}