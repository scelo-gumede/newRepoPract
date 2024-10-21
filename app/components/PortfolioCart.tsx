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
        <article className="rounded-lg shadow-lg overflow-hidden">
            <div>
                <Image alt="portfolio image" className="w-full h-full object-cover" width={500} height={600} src={image} />
            </div>
            <div className=" p-10 space-y-5">
                <div className="flex items-center justify-between space-y-5">
                    <p className="text-grey text-2xl">{title}</p>
                    <p className="text-green font-medium">{type}</p>
                </div>
                <p className="text-textColor">{text}</p>
            </div>
        </article>
    )
}