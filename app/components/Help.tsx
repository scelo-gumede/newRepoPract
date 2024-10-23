import { green } from "@mui/material/colors";
import Button from "./Button";


export default function Help(){


    return (
        <section className="px-8 bg-grey py-24 md:px-16 gap-8 flex flex-col justify-center items-center">
            <p className="text-white text-4xl font-thin ">How Can we Help  <span className="text-green text-center font-extrabold">To Grow <br /> Your Revenue and Brand Online? </span> </p>

            <Button color={true} bg={"white"} text={"Contact Us"}/>
        </section>
    )
}