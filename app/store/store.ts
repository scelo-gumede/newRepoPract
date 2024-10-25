import { configureStore } from '@reduxjs/toolkit'
import showSmallNav from "@/app/store/slices/NavBarSlice"
import modalSlice from "@/app/store/slices/Modal"
import formSlice from "@/app/store/slices/Form"

export const store = configureStore({
  reducer: {
    showNav :showSmallNav,
    modal:modalSlice,
    index:formSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch