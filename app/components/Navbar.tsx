"use client"

import Link from "next/link"
import { links } from "../data"
import Button from "./Button"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from "../hooks/store"
import { showNav } from "../store/slices/NavBarSlice"

interface NavBarProps{
    color:boolean
}


export default function Navbar(props:NavBarProps){
    const pathname = usePathname()
    const dispatch = useAppDispatch()


    

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
                                "text-green":pathname==link.url,
                                "text-white":props.color==true
                            })} key={i} href={link.url}>{link.label}</Link>
                        )
                    })}
                    <Button text="Contact Us" bg="white" color={props.color} />
                </div>

                
                <MenuIcon onClick={()=> dispatch(showNav())} className="custom-menu-icon cursor-pointer" fontSize="large" />

                
            </section>
        </nav>
    )
}