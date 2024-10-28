"use client"

import { Box,TextField,InputLabel } from "@mui/material"
import { useAppDispatch } from "@/app/hooks/store"
import { closeModal } from "@/app/store/slices/Modal"
import CancelIcon from '@mui/icons-material/Cancel';
import { defaultValue,minusCount } from "@/app/store/slices/Form";


export default function Information(){
    const dispatch = useAppDispatch()


    const handleClose = ()=>{
        dispatch(defaultValue())
        dispatch(closeModal())
    }

    const handleSubmit = ()=>{
        dispatch(defaultValue())
        dispatch(closeModal())
    }
    return (
        <div className="bg-white w-[90%] relative h-4/5 py-8 px-12 rounded md:w-4/5 lg:w-2/3">
            <CancelIcon onClick={handleClose} className="absolute cursor-pointer left-4 top-4" fontSize="large" />
            <p className="text-center font-bold text-2xl ">Additional Info</p>
            <div className="w-[20vw] mx-auto mt-2 mb-8 lg:w-[10vw] h-1 bg-green rounded-md "></div>
            <Box className="flex flex-col space-y-10">
            <InputLabel className="text-lg font-bold" >Any Info you would like to share</InputLabel>
                
                <TextField label="info" multiline rows={2} variant="outlined" fullWidth />
                
            </Box>
            <div className="flex justify-center space-x-4 my-6">
            <button
                    onClick={() => dispatch(minusCount())}
                    className="border rounded-md bg-green border-grey border-solid p-2"
                >
                    Prev
                </button>
                <button
                    onClick={handleSubmit}
                    className="border bg-green text-black border-grey border-solid p-2"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}