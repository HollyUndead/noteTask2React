import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer'
import { ArchivedReducer } from './archivedReducer'

export const rootRedcer = combineReducers({
    note : noteReducer,
    archived: ArchivedReducer
})

export type RootState = ReturnType<typeof rootRedcer>