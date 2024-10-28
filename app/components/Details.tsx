"use client";
import { TextField } from "@mui/material";
import PhoneIcon from "@/app/assets/phone.svg";
import Email from "@/app/assets/email.svg";
import Location from "@/app/assets/location.svg";
import { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import z from "zod"

const nameSchema = z.string().email() 


export default function Details() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
    };
    
    const handleClick = async () => {
        setLoading(true);
        setError("");

        try {
            nameSchema.parse(data)
            await emailjs.send("service_9ck17hp", "template_ikkwjgi", {
                from_name: "subscriber",
                to_name: "Me",
                message: `I am subscribing to your newsletter at = ${data}`,
                reply_to: `${data}`,
            });
            setData("");
        } catch (err) {
            if (err instanceof z.ZodError) {

                setError(err.errors.map(e => e.message).join(", "));
            } else {
                
                setError("Failed to send email. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        emailjs.init("apuf532fU-RNJH1z-")
    },[])

    return (
        <section className="px-8 py-16 md:px-16 text-whiteColor bg-whiteColor lg:items-center space-y-10 lg:flex gap-10">
            <div className="lg:w-1/3">
                <p className="text-4xl font-bold text-grey tracking-wider leading-snug">IT COMPANY</p>
                <p className="text-textColor2 text-sm">Welcome to our IT company, where we are dedicated to empowering businesses with transformative technology solutions for your businesses.</p>
            </div>
            <div className="text-grey flex flex-col space-y-10 lg:w-1/3">
                <p className="text-green text-2xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</p>
                <TextField 
                    value={data} 
                    onChange={handleChange} 
                    variant="outlined" 
                    label="Your email" 
                    error={!!error}
                    helperText={error}
                />
                <div className="md:flex md:justify-start">
                    <button 
                        className="px-4 py-2 bg-green font-medium text-textColor2 rounded-2xl border-grey border-2 border-solid"
                        onClick={handleClick} 
                        disabled={loading}
                        aria-label="Subscribe to newsletter"
                    >
                    Submit
                    </button>
                </div>
            </div>
            <div className="text-grey space-y-2 lg:flex lg:flex-col lg:justify-end lg:w-1/3">
                <p className="font-bold flex text-2xl">
                    <span><PhoneIcon width={30} height={30} className="mr-5" /></span>
                    061 012 1251
                </p>
                <p className="font-bold flex text-2xl">
                    <Email width={30} height={30} className="mr-5" />regularpages.com
                </p>
                <div className="flex">
                    <Location width={30} height={30} className="text-green mr-5" />
                    <address>
                        222 Smit Street<br />
                        Johannesburg<br />
                        2000
                    </address>
                </div>
            </div>
        </section>
    );
}
