import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store/store'

interface SmallNav {
  value: boolean
}

// Define the initial state using that type
const initialState: SmallNav = {
  value: false,
}

export const showSmallNav = createSlice({
  name: 'smallNav',
  initialState,
  reducers: {
        showNav :(state)=>{
            state.value=true
        },
        closeNav:(state)=>{
            state.value=false
        }
  },
})

export const {showNav,closeNav } = showSmallNav.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.showNav.value

export default showSmallNav.reducer