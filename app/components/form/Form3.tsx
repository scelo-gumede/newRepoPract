"use client"

import { Box,TextField,InputLabel } from "@mui/material"
import { useAppDispatch } from "@/app/hooks/store"
import { closeModal } from "@/app/store/slices/Modal"
import CancelIcon from '@mui/icons-material/Cancel';
import { defaultValue } from "@/app/store/slices/Form";

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
        <div className="bg-white relative h-4/5 py-8 px-12 rounded md:w-4/5 lg:w-2/3">
            <CancelIcon onClick={handleClose} className="absolute cursor-pointer left-4 top-4" fontSize="large" />
            <p className="text-center font-bold text-2xl mb-8">Additional Info</p>
            <Box className="flex flex-col space-y-10">
            <InputLabel >Any Info you would like to share</InputLabel>
                
                <TextField label="info" multiline rows={2} variant="outlined" fullWidth />
                
            </Box>
            <div className="flex justify-center my-6">
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