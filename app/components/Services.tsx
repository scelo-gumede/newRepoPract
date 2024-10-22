import { skills } from "../data"



export default function Services(){

    return (
        <section className="bg-whiteColor grid px-8 md:px-16 py-20 lg:grid-cols-2 gap-10 ">
            {
                skills.map((item,i)=>{
                    return (
                        <div className=" flex gap-2 md:gap-1 " key={i}>
                            <div className="w-[20%]">{<item.icon fontSize="large" className="text-green"/>}</div>
                            <div className="flex flex-col ">
                                <p className="text-2xl text-textColor2">{item.title}</p>
                                <p className="text-textColor">{item.text}</p>
                                </div>
                            </div>
                    )
                })
            }    
        </section>
    )
}