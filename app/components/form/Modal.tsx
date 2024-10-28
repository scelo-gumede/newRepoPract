"use client"


import clsx from "clsx"
import {form} from "@/app/data"
import { useAppSelector } from "@/app/hooks/store"
import { useEffect,useRef } from "react"
import { useState } from "react"


export default function Modal(){
    const currentIndex = useAppSelector(state=> state.index.number)
    const modalshow = useAppSelector(state=> state.modal.value)
    const screenView = useRef<HTMLDivElement | null>(null);
    const[position,setPosition]=useState(0)

    

        useEffect(()=>{
            
            const handleScroll= ()=>{
                const initialTop = window.scrollY
                if(screenView.current){
                setPosition(initialTop)
                }
            }


            window.addEventListener("scroll",handleScroll)
            
            return ()=>{
                window.removeEventListener("scroll",handleScroll)
            }

        },[modalshow])


        useEffect(() => {
            if (modalshow ) {
                

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
            
                    <section style={{top:`${position}px`}}   ref={screenView}  className={clsx(`z-50 absolute  duration-300 scale-0 flex justify-center items-center   left-0 `,{
                    "w-full  h-[100vh] scale-100 bg-opacity-70 bg-black":modalshow==true
                    })}>
                        
                        { modalshow && <Element />}
                        
                    </section>
        
        </>
    )
}