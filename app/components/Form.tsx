"use client"
import {  TextField } from "@mui/material";
import z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName:z.string().min(2).max(50),
  lastName:z.string().min(2).max(50),
  email:z.string().email(),
  message:z.string().min(5)
})


export default function Form() {
  const{handleSubmit,register,formState:{errors}}=useForm({resolver:zodResolver(schema)})

  const handleData = (data:any)=>{
    console.log(data)
  }

  return (
    <section  className="px-8 md:px-16  bg-whiteColor py-20 space-y-10">
      <div className="lg:w-[40vw] space-y-5 mx-auto">
      <p className="text-4xl font-bold tracking-wider leading-snug">SEND US A MESSAGE</p>
        <form onSubmit={handleSubmit(handleData)} className="flex justify-center  flex-col space-y-10">
          <TextField {...register("firstName")}  variant="outlined" type="text"  label="first-name" />
          {errors.firstName && <span className="text-red-800" >first name should be atleast 2 characters</span>}
          <TextField {...register("lastName")} variant="outlined" type="text" label="last-name" />
          {errors.lastName && <span className="text-red-800">last name should be atleast 2 characters</span>}
          <TextField {...register("email")} variant="outlined" type="email" label="email" />
          {errors.email && <span className="text-red-800">incorrect email format</span>}
          <TextField {...register("message")} variant="outlined" type="text" label="message" />
          {errors.message && <span className="text-red-800">message should be atleast 10 characters</span>}
          <div >
        <button className="px-4 py-2 font-medium text-textColor2 rounded-2xl border-grey border-2 bg-green border-solid" type="submit">Send message</button>
        </div>
        </form>
        </div>
    </section>
  );
}
