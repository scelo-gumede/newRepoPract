"use client"
import clsx from "clsx"
import { useAppDispatch } from "../hooks/store"

interface ButtonProps{
    text:string,
    bg: "white" | "grey",
    color?:boolean,
    func?: ()=>{ type: string; payload?: any }

}


export default function Button(props:ButtonProps){
    const dispatch = useAppDispatch()

    const{text,bg,func}=props

    const handleclick = ()=>{
        if(func){
            dispatch(func())
        }
    }

    return (
        <button onClick={handleclick} style={{"background":props.color ?"#6dbbaa" : "white","color":props.color ?"black" : ""}} className={clsx("px-4 py-2 font-medium text-textColor2 rounded-2xl border-grey border-2 border-solid",{
            "bg-grey text-white":bg == "grey",
            "bg-white":bg == "white",
        })}>
            {text}
        </button>
    )
}