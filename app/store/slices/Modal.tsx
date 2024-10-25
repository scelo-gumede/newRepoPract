import { createSlice } from '@reduxjs/toolkit'




interface ModalProps{
    value : boolean
}

const initialState:ModalProps = {
    value:false
}

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        showModal:(state)=>{
            state.value=true
        },
        closeModal:(state)=>{
            state.value=false
        }
    }
})

export const{showModal,closeModal}=modalSlice.actions



export default modalSlice.reducer