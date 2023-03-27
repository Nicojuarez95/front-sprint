import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reduce'
import textReducer from './Text/reducer'
import eventReducer from './Comic/reducer'
import checksReducer from './Checks/reducer'
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'
import mangaReducer from './Manga/reduce'
import captureState from './Capture/reducer'
// import editReducer from './EditChapters/reducer'
import chapterReducer from './Chapters/reducer'
import mangasReducer from './Mangas/reducer'

export const store = configureStore ({
    reducer: {
        alert: alertReducer, //alert por ahora tiene 3 estados, visible, title y succes
        text: textReducer,
        events: eventReducer,
        checks: checksReducer,
        checked: captureState,
        manga: mangaReducer,
        chapters: chapterReducer,
        // editChapter: editReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer,
        mangas: mangasReducer,
    }
})
