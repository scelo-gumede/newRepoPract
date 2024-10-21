"use client"
import { portfolio } from "../data"
import { useState } from "react";
import PortFolioCart from "./PortfolioCart";
import clsx from "clsx";


const types = ["all", ...new Set(portfolio.map(item => item.type))];


export default function PortFolio(){
    const[data,setData]=useState([...portfolio])
   

    

    const handleFilter =(strings:string)=>{

        if(strings==="all"){
            return setData([...portfolio])
        }

        const filteredData = portfolio.filter((item)=> item.type ===strings)
        setData(filteredData)
    }

    return (
        <section className="bg-whiteColor px-16 py-20 ">
            <div className="flex justify-center p-5 space-x-10 mx-auto ">
            {types.map((type,i)=>{
                return <Labels handleFilter={handleFilter} title={type} key={i} />
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
}

function Labels (props:LabelProps){

    return(
        <p className={clsx("text-2xl font-bold cursor-pointer",{
        
        })} onClick={()=> props.handleFilter(props.title)}>{props.title}</p>
    )
}

