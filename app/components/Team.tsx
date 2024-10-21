import pic from "@/app/assets/imagePort.jpg"
import Image from "next/image"
import { StaticImageData } from "next/image"



const teamMembers = [
    {
        name:"smith",
        occupation:"manager",
        image:pic
    },
    {
        name:"smith",
        occupation:"manager",
        image:pic
    },
    {
        name:"smith",
        occupation:"manager",
        image:pic
    }
]


interface EachTeamMemberProps{
    name:string,
    occupation:string,
    image:StaticImageData,
    
}



export default function Team(){

    return (
        <section className="px-16 py-24  space-y-10 bg-whiteColor" >
            <div>
                <p className="text-4xl font-bold  leading-snug">MEET OUR EXPERTS</p>
                <p className="text-left text-textColor2">we are proud to have a team of highly skilled professionals who are <br />
                passionate about technology and dedicated to delivering good results.

                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
        <article  className="shadow-lg rounded-lg  overflow-hidden">
            <div className="">
                <Image src={image} className="w-full  h-full object-cover" alt="person image" width={300} height={400} />
            </div>

            <div className="p-10">
                <p className="text-2xl text-grey">{name}</p>
                <p className="">{occupation}</p>
            </div>
        </article>
    )

}