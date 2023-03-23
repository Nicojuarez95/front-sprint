import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reduce'
import textReducer from './Text/reducer'
import eventReducer from './Comic/reducer'
import checksReducer from './Checks/reducer'
import mangaReducer from './Manga/reduce'
import captureState from './Capture/reducer'
import mymangasReducer from './Mymangas/reducer'
import mangaEdit from './MangaEdit/reduce'
import modalAction from './Modale/reduce'

export const store = configureStore ({
    reducer: {
        alert: alertReducer, //alert por ahora tiene 3 estados, visible, title y succes
        text: textReducer,
        events: eventReducer,
        checks: checksReducer,
        manga: mangaReducer,
        checked: captureState,
        mymangas: mymangasReducer,
        mangaedit: mangaEdit,
        modal: modalAction
    }
})
