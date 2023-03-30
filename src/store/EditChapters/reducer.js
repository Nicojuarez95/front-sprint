import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions"

const { readAll, editChapter, deleteChapter, getInfo} = actions;

const initialState = {
    chapters: [],
    title: "",
    order: null,
    chapter: {},
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            readAll.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: action.payload.chapters,
                    title: action.payload.title,
                    chapter: {},
                    order: null
                }
                return newState
            }
        )
        .addCase(
            deleteChapter.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: state.chapters.filter(chapter => chapter._id !== action.payload._id),
                    order: null,
                    chapter: {}
                }
                return newState
            }
        )
        .addCase(
            editChapter.fulfilled,
            (state, action) => {
                let editChapters = []
                for (let chapter of state.chapters){
                    if(chapter._id === action.payload.chapter._id ){
                        editChapters.push(action.payload.chapter)
                    }else{
                        editChapters.push(chapter)
                    }
                }
                let newState = {
                    ...state,
                    chapters: editChapters,
                    chapter: action.payload.chapter
              
                }
                return newState
            }
        )
        .addCase(
            getInfo.fulfilled,
            (state,action)=>{
                let newState = {
                    ...state,
                    order: action.payload.order,
                    chapter: action.payload.chapter
                }
                return newState
            }
        )
)

// const reducer = createReducer(
//     initialState,
//     (builder)=>builder
//         .addCase(
//             editChapter.fulfilled,
//             (state, action) => {
//                 let newState ={
//                     ...state,
//                     chapters:action.payload.chapters
//                 }
//                 return newState
//             }
//         )
//         .addCase(
//             deleteChapter.fulfilled,
//             (state, action) => {
//                 let newState = {
//                     ...state,
//                     manga: action.payload.manga
//                 }
//                 return newState
//             }
//         )
//         .addCase(
//             readAll.fulfilled,
//             (state, action) => {
//                 let newState = {
//                     ...state,
//                     chapter: action.payload.chapter
//                 }
//             }
//         )
// )

export default reducer