import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1,
}

export const pageNumberSlice = createSlice({
    name:"pageNumber",
    initialState,
    reducers:{
        increment:(state) => {
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        setPageNumber:(state, action)=>{
            state.value = action.payload 
        }
    }
});

export const {increment,decrement,setPageNumber} = pageNumberSlice.actions;

export default pageNumberSlice.reducer;