import Button from "./Button"
import Heros from "@/app/assets/hero.svg"

export default function Hero(){

    return(
        <section className="gradientHero flex flex-col-reverse md:flex-col lg:flex-row text-white px-10 md:px-16 py-20 lg:pb-28 lg:flex  ">

            <div className="space-y-5   lg:w-[50vw]">
                <p className="md:text-7xl text-5xl font-bold tracking-wider leading-tight ">EMPOWERING<br /> BUSINESSES WITH <br /> TECHNOLOGY</p>
                <p className="">Welcome to REGULAR PAGES, where we are dedicated to empowering businesses with transformative technology solutions. With a passion for innovation and a deep understanding of the digital landscape, we strive to drive your organization forward toward technology.</p>

                <Button text="Contact Us" bg="white" />
            </div>

            <div className="lg:w-[50vw] p-10 -mt-20 md:mt-0 ">
                 <Heros
                width="100%"
                height="auto"
                
                />
            </div>
            
        </section>
    )
}