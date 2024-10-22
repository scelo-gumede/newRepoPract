import Image from "next/image"
import { StaticImageData } from "next/image"

interface PortFolioCartProps{
    image:StaticImageData,
    text:string,
    title:string,
    type:string
}

export default function PortFolioCart(props:PortFolioCartProps){

    const{image,text,title,type}=props

    return (
        <article className="rounded-lg bg-white shadow-lg  overflow-hidden">
            <div className=" cursor-pointer">
                <Image alt="portfolio image" className="w-full hover:scale-110 duration-700   transition h-full " width={500} height={600} src={image} />
            </div>
            <div className=" p-10 space-y-5">
                <div className="flex items-center justify-between ">
                    <p className="text-grey text-2xl cursor-pointer hover:text-green transition duration-300">{title}</p>
                    <p className="text-green font-medium">{type}</p>
                </div>
                <p className="text-textColor2 text-sm">{`${text.length>200 ? text.slice(0,200).concat("...") : text}`}</p>
            </div>
        </article>
    )
}