import { portfolio } from "../data"
import PortFolioCart from "./PortfolioCart"

export default function OurPortfolio(){

    return (
        <section className="py-16 px-8 md:px-16 bg-whiteColor">
            <p className="text-4xl text-center mt-5 font-bold tracking-wider leading-snug">OUR PORTFOLIO</p>
            <div className="w-[20vw] lg:w-[10vw] h-1 bg-green rounded-md mx-auto  mb-10"></div>
            <div className="flex flex-col lg:flex-row  lg:flex  gap-10">
            {portfolio.slice(0,4).map((port,i)=>{
                return(
                    <PortFolioCart {...port} key={i}/>
                )
            })}
            </div>
        </section>
    )
}