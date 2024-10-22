import { skills } from "../data"


export default function ItSolution(){

    return (
        <section className="lg:flex px-8 py-16 md:px-16 bg-whiteColor gap-10 space-y-10 ">
            <div className="lg:w-[50vw] space-y-10 ">
                <p className="text-4xl font-bold  leading-snug ">POWERFUL IT SOLUTIONS FOR YOUR BUSINESS SUCCESS</p>
                <p className="text-textColor2 text-sm">we specialize in delivering powerful IT solutions that drive your business success. Our team of experts is dedicated to providing innovative technology solutions tailored to your unique needs. From strategic planning to implementation and ongoing support, we ensure that your IT infrastructure is robust, secure, and optimized for maximum performance.</p>
            </div>

            <div className="flex flex-col space-y-10  lg:w-[50vw]">
                {skills.map((item,i)=>{
                    return (
                        <div className=" flex gap-2 md:gap-1 " key={i}>
                            <div className="w-[20%]">{<item.icon fontSize="large" className="text-green"/>}</div>
                            <div className="flex flex-col ">
                                <p className="text-2xl text-textColor2">{item.title}</p>
                                <p className="text-textColor2 text-sm">{item.text}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </section>
    )
}