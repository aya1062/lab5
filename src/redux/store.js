import {configureStore} from "@reduxjs/toolkit"
import DetbookReducer from './slices/DetbookSlice';


export const store = configureStore({
    reducer:{
        DetbookReducer
    }
})