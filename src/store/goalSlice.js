import { createSlice } from "@reduxjs/toolkit";

const initialState = {goals:0}

export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        addGoal:(state) =>{
            ++state.goals 
        }
    }

})

export const goalActions = goalSlice.actions
export default goalSlice.reducer