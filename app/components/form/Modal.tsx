"use client"

import clsx from "clsx"
import {form} from "@/app/data"
import { useAppSelector } from "@/app/hooks/store"


export default function Modal(){
    const currentIndex = useAppSelector(state=> state.index.number)

        const Element = form[currentIndex]  

    return(
        <>
            
                    <main style={{background:"rgba(0,0,0,0.5)"}} className={clsx("absolute w-[100vw] flex justify-center items-center h-[100vh]  left-0 top-0")}>
                        <Element />
                    </main>
        
        </>
    )
}