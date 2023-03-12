import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reduce'

export const store = configureStore ({
    reducer: {
        alert: alertReducer //alert por ahora tiene 3 estados, visible, title y succes
    }
})
