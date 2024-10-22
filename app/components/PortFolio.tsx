"use client"
import { portfolio } from "../data"
import { useState } from "react";
import PortFolioCart from "./PortfolioCart";
import clsx from "clsx";


const types = ["all", ...new Set(portfolio.map(item => item.type))];


export default function PortFolio(){
    const[data,setData]=useState([...portfolio])
    const[border,setBorder]=useState("all")
   

    
    
    const handleFilter =(strings:string)=>{
        setBorder(strings)
        if(strings==="all"){
            return setData([...portfolio])
        }

        const filteredData = portfolio.filter((item)=> item.type ===strings)
        setData(filteredData)
    }

    return (
        <section className="bg-whiteColor px-8 md:px-16 py-20 ">
            <p className="textColor text-4xl text-center font-bold">Categories</p>
            <div className="w-[20vw] lg:w-[10vw] h-1 bg-green rounded-md mx-auto  mb-10"></div>
            <div className="grid grid-cols-2 md:grid-cols-1 md:flex gap-5  justify-center p-10 md:space-x-4  mx-auto ">
            {types.map((type,i)=>{
                return <Labels handleFilter={handleFilter} border={border} title={type} key={i} />
            })}
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {data.map((item,i)=>{
                    return(
                        <PortFolioCart {...item} key={i} />
                    )
                })}
            </div>
        </section>
    )
}

interface LabelProps{
    title:string,
    handleFilter:(strings:string)=>void,
    border:string
}

function Labels (props:LabelProps){
    console.log(props.border, props.title)
    return(
        <p className={clsx(" text-lg p-1 md:p-2 text-center transition rounded-md md:text-2xl buttonGradient  font-bold cursor-pointer",{
            "hover:bg-black opacity-60 border-solid border-grey border-2":props.border ==props.title
        })} onClick={()=> props.handleFilter(props.title)}>{props.title}</p>
    )
}

