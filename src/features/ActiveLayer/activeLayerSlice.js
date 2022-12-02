import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1,
}

export const activeLayerSlice = createSlice({
    name:"activeLayer",
    initialState,
    reducers:{
        increment:(state) => {
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        setActiveLayer:(state, action)=>{
            state.value = action.payload 
        }
    }
});

export const {increment,decrement,setActiveLayer} = activeLayerSlice.actions;

export default activeLayerSlice.reducer;