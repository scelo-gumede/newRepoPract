
import { createSlice } from "@reduxjs/toolkit";


interface Details{
    general:{
        name:string,
        phone:number,
        email:string,
        website:string
    },
    projectDetails:{
        services:string,
        goal:string,
        haveWebsite:string,
        likeOrDislike:string
    },
    additionalInfo:{
        info:string
    }

}

interface FormProps {
    number: number;
    information:Details
}

const initialState: FormProps = {
    number: 0,
    information:{
        general:{
            name:"",
            phone:0,
            email:"",
            website:""
        },
        projectDetails:{
            services:"",
            goal:"",
            haveWebsite:"",
            likeOrDislike:""
        },
        additionalInfo:{
            info:""
        }
    }
};

const formSlice = createSlice({
    name: "index",
    initialState,
    reducers: {
        addCount: (state) => {
            state.number += 1; // Increment the number
        },
        minusCount: (state) => {
            if (state.number > 0) { // Only decrement if greater than 0
                state.number -= 1; 
            }
        },
        defaultValue:(state)=>{
            state.number = 0
        }
    },
});

export const { addCount, minusCount,defaultValue } = formSlice.actions;
export default formSlice.reducer;
