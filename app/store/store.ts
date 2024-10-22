import { configureStore } from '@reduxjs/toolkit'
import showSmallNav from "@/app/store/slices/NavBarSlice"

export const store = configureStore({
  reducer: {
    showNav :showSmallNav
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch