import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer'
import { todoReducer } from './todoReducer'

export const rootRedcer = combineReducers({
    note : noteReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootRedcer>