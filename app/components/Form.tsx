import { Box, TextField } from "@mui/material";
import Button from "./Button";



export default function Form() {


  return (
    <section  className="px-8 md:px-16  bg-whiteColor py-20 space-y-10">
      <div className="lg:w-[40vw] space-y-5 mx-auto">
      <p className="text-4xl font-bold tracking-wider leading-snug">SEND US A MESSAGE</p>
        <Box className="flex justify-center text-center flex-col space-y-10">
          <TextField variant="outlined" type="text"  label="first-name" />
          <TextField variant="outlined" type="text" label="last-name" />
          <TextField variant="outlined" type="email" label="email" />
          <TextField variant="outlined" type="text" label="subject" />
          <TextField variant="outlined" type="text" label="message" />
        </Box>
        <Button text="Send message" color={true} bg="grey" />
        </div>
    </section>
  );
}
