
"use client";
import { Box, TextField } from "@mui/material";
import { useAppDispatch } from "@/app/hooks/store";
import { addCount,defaultValue } from "@/app/store/slices/Form";
import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { closeModal } from "@/app/store/slices/Modal";

export default function General() {
    const dispatch = useAppDispatch(); // Call the dispatch function correctly

    const handleClose = ()=>{
        dispatch(defaultValue())
        dispatch(closeModal())
    }

    return (
        <div className="bg-white relative h-4/5 py-8 px-12 rounded md:w-4/5 lg:w-2/3">
            <CancelIcon onClick={handleClose} className="absolute cursor-pointer left-4 top-4" fontSize="large" />
            <p className="text-center font-bold text-2xl ">General Information</p>
            <div className="w-[20vw] mx-auto  mb-8 lg:w-[10vw] h-1 bg-green rounded-md "></div>
            <Box className="flex flex-col space-y-10">
                <TextField label="Name" variant="outlined" fullWidth />
                <TextField label="Phone" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Website URL" variant="outlined" fullWidth />
            </Box>
            <div className="flex justify-center my-6">
                <button
                    onClick={() => dispatch(addCount())}
                    className="border bg-green rounded-md border-grey border-solid p-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
