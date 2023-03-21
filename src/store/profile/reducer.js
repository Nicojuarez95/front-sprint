import { createReducer } from "@reduxjs/toolkit";
import authorAction from './action.js'

const {read_author, update_author} = authorAction

const initialState = {author : []}

const reducer = createReducer(
    initialState,
    (builder)=>builder
    .addCase(
        read_author.fulfilled,
        (state,actions)=>{
            let newState={
                ...state,
                author:actions.payload.author
            }
            return newState
        }
    )
    .addCase(
        update_author.fulfilled,
        (state,actions)=>{
            let newState ={
                ...state,
                author:actions.payload.author
            }
            return newState
        }
    )
)

export default reducer;