"use client"

import clsx from "clsx"
import {links} from "@/app/data"
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch,useAppSelector } from "../hooks/store";
import {closeNav } from "../store/slices/NavBarSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SmallNavBar(){
    const show = useAppSelector((state)=>state.showNav.value)
    const dispatch = useAppDispatch()
    const pathname=usePathname()



    return(
        <section className={clsx(" z-50 text-xl transition flex flex-col justify-center items-center fixed opacity-100 left-0 top-0 w-full h-full space-y-5 bg-white ",{
            "scale-100":show===true,
            "scale-0":show===false,
        })}>
            <CancelIcon className="absolute right-4 top-4 " fontSize="large" onClick={()=> dispatch(closeNav())} />
            {links.map((link,i)=>{
                return (
                    <Link onClick={()=> dispatch(closeNav())} className={clsx(" text-4xl ",{
                        "text-green":pathname==link.url
                    })} key={i} href={link.url}>{link.label}</Link>
                )
            })}
        </section>
    )
}