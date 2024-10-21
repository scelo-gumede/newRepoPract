import { portfolio } from "../data"
import PortFolioCart from "./PortfolioCart"

export default function OurPortfolio(){

    return (
        <section className="p-16 bg-whiteColor">

            <div className="lg:flex  gap-10">
            {portfolio.map((port,i)=>{
                return(
                    <PortFolioCart {...port} key={i}/>
                )
            })}
            </div>
        </section>
    )
}