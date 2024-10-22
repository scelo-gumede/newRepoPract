"use client"

import Link from "next/link"
import { links } from "../data"
import Button from "./Button"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import CancelIcon from '@mui/icons-material/Cancel';

export default function Navbar(){
    const pathname = usePathname()
    const[show,setShow]=useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }

    return (
        <nav className=" text-textColor py-4 bg-grey w-full  ">
            <section className="flex items-center max-w-7xl justify-between p-4 mx-auto">
                <div>
                    LOGO
                </div>

                <div className="space-x-5 items-center hidden lg:flex text-xl ">
                    {links.map((link,i)=>{
                        return (
                            <Link  className={clsx({
                                "text-green":pathname==link.url
                            })} key={i} href={link.url}>{link.label}</Link>
                        )
                    })}
                    <Button text="Contact Us" bg="white" />
                </div>

                
                <MenuIcon onClick={handleShow} className="custom-menu-icon cursor-pointer" fontSize="large" />


                <section className={clsx(" text-xl transition flex flex-col justify-center items-center absolute left-0 top-0 w-full h-full space-y-5 bg-white ",{
                    "scale-100":show===true,
                    "scale-0":show===false,
                })}>
                    <CancelIcon className="absolute right-4 top-4 " fontSize="large" onClick={()=> handleShow()} />
                    {links.map((link,i)=>{
                        return (
                            <Link onClick={()=> handleShow()} className={clsx(" text-4xl ",{
                                "text-green":pathname==link.url
                            })} key={i} href={link.url}>{link.label}</Link>
                        )
                    })}
                </section>
            </section>
        </nav>
    )
}