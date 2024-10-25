import { Box, TextField } from "@mui/material";
import Button from "@mui/material"


export default function General(){

    return (
        <div className=" bg-white py-8 px-12 rounded md:w-2/3 lg:1/2">
            <p className="text-center font-bold text-2xl mb-8 " >General Information</p>
            <Box className="flex flex-col space-y-10">
                <TextField label="name"/>
                <TextField label="phone"  />
                <TextField label="email" />
                <TextField label="websilte url" />
            </Box>
            <div className="flex justify-center my-6 ">
                <button className="border border-grey border-solid p-2">Next</button>
            </div>
        </div>
    )
}