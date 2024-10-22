import { Box, TextField } from "@mui/material";
import Button from "./Button";



export default function Form() {


  return (
    <section  className="px-16 bg-whiteColor py-20 space-y-10">
      <div className="lg:w-[50vw] space-y-5 mx-auto">
      <p className="text-6xl font-bold tracking-wider leading-snug">SEND US A MESSAGE</p>
        <Box className="flex justify-center text-center flex-col space-y-10">
          <TextField variant="outlined" type="text" size="small" label="first-name" />
          <TextField variant="standard" type="text" label="last-name" />
          <TextField variant="standard" type="email" label="email" />
          <TextField variant="standard" type="text" label="subject" />
          <TextField variant="standard" type="text" label="message" />
        </Box>
        <Button text="Send message" bg="grey" />
        </div>
    </section>
  );
}
