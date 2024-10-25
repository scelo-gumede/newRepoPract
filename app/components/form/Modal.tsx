"use client"


import clsx from "clsx"
import {form} from "@/app/data"
import { useAppSelector } from "@/app/hooks/store"
import { useEffect,useRef } from "react"



export default function Modal(){
    const currentIndex = useAppSelector(state=> state.index.number)
    const modalshow = useAppSelector(state=> state.modal.value)
    const screenView = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{

        if(screenView?.current){
            screenView?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    },[currentIndex])



        useEffect(() => {
            if (modalshow) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
            // Clean up on unmount
            return () => {
                document.body.classList.remove('no-scroll');
            };
    },[modalshow])

        const Element = form[currentIndex]  


    return(
        <>
            
                    <main ref={screenView}  style={{background:"rgba(0,0,0,0.5)"}} className={clsx("z-50 absolute w-[100vw] flex justify-center items-center h-[100vh]  left-0 top-0")}>
                        <Element />
                    </main>
        
        </>
    )
}