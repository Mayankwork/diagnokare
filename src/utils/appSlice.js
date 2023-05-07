import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        data:[],
    },
    reducers:{
        addToForm:(state,action)=>{
            state.data= [...state.data,action.payload]
        }
    }
})
export const { addToForm}= appSlice.actions
export default appSlice.reducer;