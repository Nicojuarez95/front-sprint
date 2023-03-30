import { createReducer } from "@reduxjs/toolkit";
import chapterActions from './actions'
const { get_chapters } = chapterActions

const initialState = {
    chapters: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_chapters.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapter: action.payload.chapters
                }
                return newState
            }
        )
)

export default reducer