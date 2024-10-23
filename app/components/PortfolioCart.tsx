"use client"
import Image from "next/image"
import { StaticImageData } from "next/image"
import {useState} from "react"
import clsx from "clsx"

interface PortFolioCartProps{
    image:StaticImageData,
    text:string,
    title:string,
    type:string
}

export default function PortFolioCart(props:PortFolioCartProps){
    const[hovered,setHovered]=useState(false)
    const{image,text,title,type}=props

    return (
        <article className="rounded-lg bg-white shadow-lg  overflow-hidden">
            <div onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className="relative  overflow-hidden">
                <Image alt="portfolio image" className="w-full hover:scale-110 duration-700   transition h-full " width={500} height={600} src={image} />
                <div className={clsx("absolute flex justify-center items-center transition duration-300 bg-black opacity-50 left-0 scale-0  top-0 w-full h-full",{
                    "scale-100":hovered
                })}><p className="text-white hover:scale-125 transition cursor-pointer border-2 border-red-700 p-2 border-solid">LIVE</p> </div>
            </div>
            <div className=" p-10 space-y-5">
                <div className="flex items-center justify-between ">
                    <p className="text-green text-sm hover:underline cursor-pointer ">{title}</p>
                    <p className="text-green text-sm font-medium">{type}</p>
                </div>
                <p className="text-textColor2 text-sm">{`${text.length>200 ? text.slice(0,200).concat("...") : text}`}</p>
            </div>
        </article>
    )
}