import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rootRedcer } from './reducers/rootReducer'

export const store = createStore(rootRedcer, applyMiddleware(thunk))