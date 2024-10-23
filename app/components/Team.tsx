
import { teamMembers } from "../data"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';



interface EachTeamMemberProps{
    name:string,
    occupation:string,
    Images:React.FC<React.SVGProps<SVGSVGElement>>,
    text:string
    
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

    const{occupation,name,Images,text}=props
    return(
        <article  className="shadow-lg rounded-lg bg-white overflow-hidden">
            <div className=" hover:scale-110 rounded-full bg-green overflow-hidden duration-500 transition-all">
                <Images width="100%" height="auto" />
            </div>

            <div className="p-10 space-y-2">

                <div className="flex items-center justify-between">
                <p className="text-2xl text-grey">{name}</p>
                <div className="flex space-x-2 text-textColor">
                    <XIcon fontSize="small"  className="hover:text-green text-black cursor-pointer transition scale-125  rounded-md" />
                    <FacebookIcon fontSize="small" className="hover:text-green text-blue-800 cursor-pointer transition scale-125  rounded-md"/>
                    <GitHubIcon fontSize="small" className="hover:text-green text-red-800 cursor-pointer transition scale-125  rounded-md"/>
                </div>
                </div>
                <p className="text-sm font-bold">{occupation}</p>

                <p className="text-sm">{text}</p>
            </div>
        </article>
    )

}