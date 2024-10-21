import { TextField } from "@mui/material";
import Button from "./Button";


export default function Details(){


    return(
        <section className="p-16 text-whiteColor bg-whiteColor lg:items-center space-y-10 lg:flex gap-10  text-grey">
            <div className="lg:w-1/3">
                <p className="text-6xl font-bold text-grey tracking-wider leading-snug">IT COMPANY</p>
                <p className="text-textColor2">Welcome to our IT company, where we are dedicated to empowering businesses with transformative technology solutions for your businesses.</p>
            </div>
            <div className="text-grey flex flex-col space-y-10 lg:w-1/3">
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                <TextField variant="standard" label="your email" />
                <div className="md:flex md:justify-start">
                <Button text="Subscribe" bg="grey" />
                </div>
            </div>
            <div className="text-grey lg:w-1/3">
                <p>061 012 1251</p>
                <address>
                    CC3987 Grammar rd<br />
                    Mayville <br />
                    4091
                </address>
            </div>
        </section>
    )
}