import {configureStore} from '@reduxjs/toolkit'
import toodReducer from './features/todo/toodSlice'

export const store=configureStore({
    reducer:{
        todo:toodReducer,
    }
})