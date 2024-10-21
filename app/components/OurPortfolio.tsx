import { portfolio } from "../data"
import PortFolioCart from "./PortfolioCart"

export default function OurPortfolio(){

    return (
        <section className="p-16 bg-whiteColor">
            <p className="text-6xl font-bold tracking-wider leading-snug">OUR PORTFOLIO</p>
            <div className="lg:flex  gap-10">
            {portfolio.slice(0,2).map((port,i)=>{
                return(
                    <PortFolioCart {...port} key={i}/>
                )
            })}
            </div>
        </section>
    )
}