

import { createSlice } from "@reduxjs/toolkit";

interface FormProps {
    number: number;
}

const initialState: FormProps = {
    number: 0,
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
    },
});

export const { addCount, minusCount } = formSlice.actions;
export default formSlice.reducer;
