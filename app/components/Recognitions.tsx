import { achievements } from "../data"




interface AchievementProps{
    title:string,
    value:string
}

export default function Recognition(){

    return(
        <section className="px-16 bg-whiteColor py-20 lg:flex gap-10">
            <div className=" lg:w-[50vw] space-y-5  ">
            <p className="text-4xl font-bold  leading-snug">RECOGNITIONS AND ACHIEVEMENTS</p>
            <p className="text-textColor2 text-sm">we take pride in our remarkable recognitions and achievements that highlight our dedication, expertise, and commitment to excellence. We have been consistently recognized and honored for our contributions in the IT industry, client satisfaction, successful project deployments, and continuous innovation.</p>
            </div>
            <div className="grid lg:w-[50vw] gap-5 justify-center md:pt-10 lg:pt-0 grid-cols-1 md:grid-cols-2">
                {achievements.map((item,i)=>{
                    return (
                            <Achievement {...item} key={i} />
                    )
                })}
            </div>
        </section>
    )

}


function Achievement(props:AchievementProps){
    const{title,value}=props

    return (
        <article className="text-center space-y-2">
            <p className="text-7xl font-bold text-green">{value}</p>
            <p className="text-textColor2 ">{`${title.toUpperCase()}`}</p>
        </article>
    )
}