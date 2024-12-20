"use client"

import Link from "next/link"
import { links } from "../data"
import Button from "./Button"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from "../hooks/store"
import { showNav } from "../store/slices/NavBarSlice"
import Logo from "@/app/assets/logo2.svg"
import { showModal } from "../store/slices/Modal"

interface NavBarProps{
    color:boolean
}


export default function Navbar(props:NavBarProps){
    const pathname = usePathname()
    const dispatch = useAppDispatch()


    
    
    return (
        <nav className=" text-textColor py-4 bg-grey w-full  ">
            <section className="flex items-center max-w-7xl justify-between p-4 mx-auto">

                <div className="flex items-center space-x-2 ">
                    <Link href="/">
                <div className="size-10 cursor-pointer">
                    <Logo  width="100%" height="auto"/>
                </div>
                </Link>
                <p className="font-bold text-white">REGULAR PAGES</p>
                </div>

                <div className="space-x-5 items-center hidden lg:flex text-xl ">
                    {links.map((link,i)=>{
                        return (
                            <Link  className={clsx(" transition duration-300 ",{
                                "text-green border-b-white border-b-4 border-b-solid ":pathname==link.url,
                                "text-white":props.color==true
                            })} key={i} href={link.url}>{link.label}</Link>
                        )
                    })}
                    <Button func={showModal} text="Get Quote" bg="white" color={props.color} />
                </div>

                
                <MenuIcon onClick={()=> dispatch(showNav())} className="custom-menu-icon cursor-pointer" fontSize="large" />

                
            </section>
        </nav>
    )
}