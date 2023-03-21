import { createReducer } from "@reduxjs/toolkit"
import actions from './actions'

const { captureId, deleteManga } = actions

const initialState = {
    manga:[],
 }

 const reducer = createReducer(initialState, builder => {
    builder
      .addCase(captureId.fulfilled, (state, action) => {
        let newState = {
          ...state,
          manga: action.payload.manga
        };
        return newState;
      })
      .addCase(deleteManga.fulfilled, (state, action) => {
        let newState = {
          ...state,
          manga: state.manga.filter(manga => manga._id !== action.payload.mangaId)
        };
        return newState;
      });
  });

 export default reducer