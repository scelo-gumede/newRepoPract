
import Image from "next/image"
import { StaticImageData } from "next/image"
import { teamMembers } from "../data"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as motion from "framer-motion/client"


interface EachTeamMemberProps{
    name:string,
    occupation:string,
    image:StaticImageData,
    
}



export default function Team(){

    return (
        <section className="px-8 md:px-16 py-24  space-y-10 bg-whiteColor" >
            <div>
                <p className="text-4xl font-bold text-center md:text-left leading-snug">MEET OUR EXPERTS</p>
                <div className="w-[20vw] mx-auto md:mx-0 lg:w-[10vw] h-1 bg-green rounded-md   mb-8"></div>
                <p className="text-left text-sm text-textColor2">we are proud to have a team of highly skilled professionals who are <br />
                passionate about technology and dedicated to delivering good results.

                </p>
            </div>
            <div className="grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((item,i)=>{ 
                

                return (
                    <EachTeamMember  {...item}  key={i}/>
                )
            })}
            </div>
        </section>
    )
}



function EachTeamMember(props:EachTeamMemberProps){

    const{occupation,name,image}=props
    return(
        <article  className="shadow-lg rounded-lg bg-white overflow-hidden">
            <div className=" hover:scale-110 duration-500 transition-all">
                <Image src={image} className="w-full  h-full object-cover" alt="person image" width={300} height={400} />
            </div>

            <div className="p-10 space-y-2">
                <div className="flex items-center justify-between">
                <p className="text-2xl text-grey">{name}</p>
                <div className="flex space-x-2 text-textColor">
                    <XIcon fontSize="small"  className="hover:text-green cursor-pointer transition scale-125  rounded-md" />
                    <FacebookIcon fontSize="small" className="hover:text-green cursor-pointer transition scale-125  rounded-md"/>
                    <GitHubIcon fontSize="small" className="hover:text-green cursor-pointer transition scale-125  rounded-md"/>
                </div>
                </div>
                <p className="text-sm">{occupation}</p>
            </div>
        </article>
    )

}