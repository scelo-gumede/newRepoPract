"use client"

import clsx from "clsx"
import {links} from "@/app/data"
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch,useAppSelector } from "../hooks/store";
import {closeNav } from "../store/slices/NavBarSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/assets/logo2.svg"
import { showModal } from "../store/slices/Modal";


export default function SmallNavBar(){
    const show = useAppSelector((state)=>state.showNav.value)
    const dispatch = useAppDispatch()
    const pathname=usePathname()


    const handleClick = ()=>{
        dispatch(closeNav())
        dispatch(showModal())
    }


    return(
        <section className={clsx(" z-50 text-xl transition flex flex-col justify-center items-center fixed opacity-100 left-0 top-0 w-full h-full space-y-5 bg-white ",{
            "scale-100":show===true,
            "scale-0":show===false,
        })}>
            
            <div className="flex absolute left-4 top-4 items-center space-x-2 ">
                    <Link onClick={()=> dispatch(closeNav())} href="/">
                <div className="size-10 cursor-pointer">
                    <Logo  width="100%" height="auto"/>
                </div>
                </Link>
                <p className="font-bold text-black">IT COMPANY</p>
                </div>

            <CancelIcon className="absolute right-4 top-4 " fontSize="large" onClick={()=> dispatch(closeNav())} />
            {links.map((link,i)=>{
                return (
                    <Link onClick={()=> dispatch(closeNav())} className={clsx(" text-4xl ",{
                        "text-green":pathname==link.url
                    })} key={i} href={link.url}>{link.label}</Link>
                )
            })}

            <div className="flex justify-center">
                <button onClick={handleClick} className="px-4 py-2 font-medium text-textColor2 rounded-2xl border-grey border-2 border-solid">Get Quote</button>
            </div>
        </section>
    )
}