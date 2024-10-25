"use client"
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";



export default function ProjectDetails(){
    const[option,setOption]=useState<string>("")

    const handleChange= (e:SelectChangeEvent<string>)=>{
        setOption(e.target.value as string)
    }

    return(
        <div className="bg-white py-8 space-y-4 px-12 rounded md:w-2/3 lg:1/2">
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
            </Box>
        </div>
    )
}