
import Button from "./Button";


export default function Help(){


    return (
        <section className="px-8 bg-grey py-24 md:px-16 gap-8 flex flex-col justify-center items-center">
            <p className="text-white text-center font-thin text-4xl font-thin ">How Can we Help To Grow </p> 
            <p className="text-green -mt-8 text-center text-4xl font-extrabold">Your Revenue and Brand Online?</p> 

            <Button color={true} bg={"white"} text={"Contact Us"}/>
        </section>
    )
}