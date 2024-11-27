"use client";

import { TextField } from "@mui/material";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "emailjs-com";

const schema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(5),
});

interface schemaProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Form() {
  const { handleSubmit, register, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleData = async (data: schemaProps) => {
    setLoading(true);
    setError("");

    try {
      await emailjs.send("service_9ck17hp", "template_ikkwjgi", {
        from_name: "message query",
        to_name: "Me for message",
        message: `${data.message}`,
        reply_to: `${data.email}`,
      });
    } catch (err: unknown) { // Explicitly typing 'err' as 'unknown'
      if (err instanceof z.ZodError) {  // Type guard to check if 'err' is an instance of ZodError
        setError(err.errors.map((e) => e.message).join(", "));
      } else if (err instanceof Error) { // Fallback for general errors
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-8 md:px-16 bg-whiteColor py-20 space-y-10">
      <div className="lg:w-[40vw] space-y-5 mx-auto">
        <p className="text-4xl font-bold tracking-wider leading-snug">SEND US A MESSAGE</p>
        <form onSubmit={handleSubmit(handleData)} className="flex justify-center flex-col space-y-10">
          <TextField
            {...register("firstName")}
            variant="outlined"
            type="text"
            label="First Name"
          />
          {errors.firstName && (
            <span className="text-red-800">First name should be at least 2 characters</span>
          )}

          <TextField
            {...register("lastName")}
            variant="outlined"
            type="text"
            label="Last Name"
          />
          {errors.lastName && (
            <span className="text-red-800">Last name should be at least 2 characters</span>
          )}

          <TextField
            error={!!error}
            helperText={error}
            {...register("email")}
            variant="outlined"
            type="email"
            label="Email"
          />
          {errors.email && (
            <span className="text-red-800">Incorrect email format</span>
          )}

          <TextField
            {...register("message")}
            variant="outlined"
            type="text"
            label="Message"
          />
          {errors.message && (
            <span className="text-red-800">Message should be at least 5 characters</span>
          )}

          <div>
            <button
              disabled={loading}
              className="px-4 py-2 font-medium text-textColor2 rounded-2xl border-grey border-2 bg-green border-solid"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
