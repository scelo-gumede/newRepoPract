import { TextField } from "@mui/material";
import Button from "./Button";


import PhoneIcon from "@/app/assets/phone.svg"
import Email from "@/app/assets/email.svg"
import Location from "@/app/assets/location.svg"

export default function Details(){


    return(
        <section className="px-8 py-16 md:px-16 text-whiteColor bg-whiteColor lg:items-center space-y-10 lg:flex gap-10  ">
            <div className="lg:w-1/3">
                <p className="text-4xl font-bold text-grey tracking-wider leading-snug">IT COMPANY</p>
                <p className="text-textColor2 text-sm">Welcome to our IT company, where we are dedicated to empowering businesses with transformative technology solutions for your businesses.</p>
            </div>
            <div className="text-grey flex flex-col space-y-10 lg:w-1/3">
                <p className="text-green text-2xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</p>
                <TextField variant="outlined" label="your email" />
                <div className="md:flex md:justify-start">
                <Button text="Subscribe" color={true} bg="grey" />
                </div>
            </div>
            <div className="text-grey space-y-2 lg:flex lg:flex-col lg:justify-end lg:w-1/3">
                <p className="font-bold flex text-2xl"><span><PhoneIcon  width={30} height={30} className=" mr-5"  /></span>061 012 1251</p>
                <p className="font-bold flex  text-2xl">
                <Email width={30} height={30} className="mr-5" /> info@email.com</p>
                <div className="flex"><Location width={30} height={30} className="text-green mr-5" />
                <address className="">
                    CC3987 Grammar rd<br />
                    Mayville <br />
                    4091
                </address>
                </div>
                
            </div>
        </section>
    )
}