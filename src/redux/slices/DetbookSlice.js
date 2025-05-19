import { createSlice } from "@reduxjs/toolkit";


const  DetbookSlice=createSlice({
    name:"Detbook",
    initialState:{Detbook:[]},
        reducers:{
        addtoshowlist:(state,action)=>
        {
            state.Detbook.push(action.payload)
            console.log(state.Detbook.length);
        },
        removeFromshowlist:(state,action)=>
        {
            state.Detbook.splice(action.payload)
            console.log(state.Detbook.length);
        }
    }
})

export const  {removeFromshowlist,addtoshowlist}=DetbookSlice.actions


export default DetbookSlice.reducer;