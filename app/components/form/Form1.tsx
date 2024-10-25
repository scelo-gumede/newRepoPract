
"use client";
import { Box, TextField } from "@mui/material";
import { useAppDispatch } from "@/app/hooks/store";
import { addCount } from "@/app/store/slices/Form";
import React from "react";

export default function General() {
    const dispatch = useAppDispatch(); // Call the dispatch function correctly

    return (
        <div className="bg-white py-8 px-12 rounded md:w-2/3 lg:w-1/2">
            <p className="text-center font-bold text-2xl mb-8">General Information</p>
            <Box className="flex flex-col space-y-10">
                <TextField label="Name" variant="outlined" fullWidth />
                <TextField label="Phone" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Website URL" variant="outlined" fullWidth />
            </Box>
            <div className="flex justify-center my-6">
                <button
                    onClick={() => dispatch(addCount())}
                    className="border border-grey border-solid p-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
