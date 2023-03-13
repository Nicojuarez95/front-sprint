import actions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const { captureChapter, captureManga } = actions

const initialstate = {
    data: []
}

const reducer = createReducer(
    initialstate,
    (builder) => builder.addCase(
        captureManga.fulfilled,(state,action)=>{
            let newstate={
                ...state,
                mangas: action.payload.mangas
            }
            return newstate
        }
    )
        .addCase(
            captureChapter.fulfilled,
            (state, action) => {
                let newstate = {
                    ...state,
                    mangas: action.payload.mangas
                }
                return newstate
            }
        )
)
export default reducer