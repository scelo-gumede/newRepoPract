
import Button from "./Button"
import About from "@/app/assets/monitors.svg"


export default function AboutUsHome(){

    return (
        <section className=" gradientAboutHome  text-black py-20 px-8 md:px-16 lg:px-32 lg:flex  ">

            <div className="space-y-4  flex flex-col justify-center lg:w-[50vw]">
                <p className=" text-4xl lg:text-6xl font-bold tracking-normal  leading-none ">ABOUT REGULAR PAGES</p>
                <p className="text-textColor2 text-sm">At REGULAR PAGES, we are a leading IT solutions provider dedicated to delivering innovative and cutting-edge technology services.</p>
                       
                <p className="text-sm">
                With a team of skilled professionals and a passion for excellence, we strive to empower businesses with advanced digital solutions that drive growth, efficiency, and success. With a strong commitment to customer satisfaction, we work closely with our clients to understand their unique needs and deliver tailored IT solutions that exceed expectations. Trust us to be your reliable partner in navigating the ever-evolving technology landscape and unlocking the full potential of your business.</p>
                <div className="flex justify-start">
                <Button text="Learn more" color={true} bg="grey" />
                </div>
            </div>

            <div className="lg:w-[50vw] pt-8 md:pt-0">
                 <About
                width="100%"
                height="auto"
                />
            </div>
            
        </section>
    )
}