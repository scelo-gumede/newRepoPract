"use client"
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch } from "@/app/hooks/store";
import { closeModal } from "@/app/store/slices/Modal";
import { addCount,minusCount,defaultValue } from "@/app/store/slices/Form";


export default function ProjectDetails(){
    const[option,setOption]=useState<string>("website development")
    const[website,setWebsite]=useState<string>("yes")
    const[goal,setGoal]=useState<string>("Sales Conversion")
    const[dislike,setDislike]=useState<string>("Slow Loading Times")

    const dispatch = useAppDispatch()

    const handleChange= (e:SelectChangeEvent<string>)=>{
        setOption(e.target.value as string)
    }

    const handleWebsite = (e:SelectChangeEvent<string>)=>{
        setWebsite(e.target.value)
    }

    const handleGoal = (e:SelectChangeEvent<string>)=>{
        setGoal(e.target.value)
    }

    const handleDislike = (e:SelectChangeEvent<string>)=>{
        setDislike(e.target.value)
    }

    const handleClose = ()=>{
        dispatch(defaultValue())
        dispatch(closeModal())
    }

    return(
        <div className="bg-white relative h-4/5 py-8 px-12 rounded md:w-4/5 lg:w-2/3">
            <CancelIcon onClick={handleClose} className="absolute cursor-pointer left-4 top-4" fontSize="large" />
            <p className="text-center text-2xl  font-bold">Project Details </p>
            <div className="w-[20vw] mx-auto  mb-8 lg:w-[10vw] h-1 bg-green rounded-md "></div>
            
            <Box className="flex flex-col text-lg font-bold space-y-10">


                <div className="flex  flex-col md:flex-row justify-start md:justify-between md:items-center">
                <InputLabel>What services are you interested in</InputLabel>
                <Select value={option} onChange={handleChange} >
                    <MenuItem value={"website development"}>Website Development</MenuItem>
                    <MenuItem value={"seo"}>Search Engine Optimization</MenuItem>

                </Select>
                </div>
                

                <div className="flex  flex-col md:flex-row justify-start md:justify-between md:items-center">
                    <InputLabel >What is the main goal of your website</InputLabel>
                    <Select value={goal} onChange={handleGoal}>
                        <MenuItem value={"Sales Conversion"}>Sales Conversion</MenuItem>
                        <MenuItem value={"Brand Awareness"}>Brand Awareness</MenuItem>
                        <MenuItem value={"User Engagement"}>User Engagement</MenuItem>
                        <MenuItem value={"Customer Support"}>Customer Support</MenuItem>
                        <MenuItem value={"SEO Optimization"}>SEO Optimization</MenuItem>
                        <MenuItem value={"Analytics and Insights"}>Analytics and Insights</MenuItem>
                        <MenuItem value={"Lead Generation"}>Lead Generation</MenuItem>
                    </Select>
                    </div>

                <div className="flex  flex-col md:flex-row justify-start md:justify-between md:items-center">
                    <InputLabel >Do you currently have a website</InputLabel>
                    <Select value={website} onChange={handleWebsite}>
                        <MenuItem value={"yes"}>Yes</MenuItem>
                        <MenuItem value={"no"}>No</MenuItem>
                        <MenuItem value={"in development"}>In Development</MenuItem>
                    </Select>
                </div>

                <div className="flex  flex-col md:flex-row justify-start md:justify-between md:items-center ">
                    <InputLabel>If yes , what do you like or dislike about it</InputLabel>
                    <Select value={dislike} onChange={handleDislike}>
                        <MenuItem value={"Slow Loading Times"}>Slow Loading Times</MenuItem>
                        <MenuItem value={"Poor Design"}>Poor Design</MenuItem>
                        <MenuItem value={"Technical Issues"}>Technical Issues</MenuItem>
                        <MenuItem value={"Outdated Content"}>Outdated Content</MenuItem>
                        <MenuItem value={"Accessibility Problems"}>Accessibility Problems</MenuItem>
                        <MenuItem value={"SEO problems"}>SEO problems</MenuItem>
                    </Select>
                </div>


            </Box>
            <div className="flex justify-center space-x-4 my-6">
            <button
                    onClick={() => dispatch(minusCount())}
                    className="border rounded-md bg-green border-grey border-solid p-2"
                >
                    Prev
                </button>
                <button
                    onClick={() => dispatch(addCount())}
                    className="border rounded-md bg-green border-grey border-solid p-2"
                >
                    Next
                </button>
            </div>
        </div>
    )
}