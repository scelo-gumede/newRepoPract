"use client"
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch } from "@/app/hooks/store";
import { closeModal } from "@/app/store/slices/Modal";


export default function ProjectDetails(){
    const[option,setOption]=useState<string>("")
    const[website,setWebsite]=useState<string>("")

    const dispatch = useAppDispatch()

    const handleChange= (e:SelectChangeEvent<string>)=>{
        setOption(e.target.value as string)
    }

    const handleWebsite = (e:SelectChangeEvent<string>)=>{
        setWebsite(e.target.value)
    }

    return(
        <div className="bg-white relative py-8 space-y-4 px-12 rounded md:w-2/3 lg:1/2">
            <CancelIcon onClick={()=> dispatch(closeModal())} className="absolute cursor-pointer left-4 top-4" fontSize="large" />
            <p className="text-center text-2xl font-bold">Project Details </p>
            <Box className="space-y-5">
                <div className="flex items-center space-x-4 justify-between">
                <InputLabel>What services are you interested in</InputLabel>
                <Select value={option} onChange={handleChange} >
                    <MenuItem value={"web development"}>Web Development</MenuItem>
                    <MenuItem value={"seo"}>Search Engine Optimization</MenuItem>

                </Select>
                </div>
                <div className="flex justify-between items-center space-x-4">
                    <InputLabel>What is the main goal of your website</InputLabel>
                    <TextField multiline rows={2} />
                </div>

                <div className="flex justify-between items-center space-x-4">
                    <InputLabel >Do you currently have a website</InputLabel>
                    <Select value={website} onChange={handleWebsite}>
                        <MenuItem value={"yes"}>Yes</MenuItem>
                        <MenuItem value={"no"}>No</MenuItem>
                        <MenuItem value={"in development"}>In Development</MenuItem>
                    </Select>
                </div>

                <div className="flex justify-between items-center space-x-4">
                    <InputLabel>If yes , what do you like or dislike about it</InputLabel>
                    <TextField multiline rows={2} />
                </div>


            </Box>
        </div>
    )
}