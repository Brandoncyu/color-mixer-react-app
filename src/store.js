//Export a function that creates a new store with a reducer or reducers
import { createStore, combineReducers } from 'redux'
import colorsReducer from './reducers/colors'

const reducers = combineReducers({colors: colorsReducer})
export default () => createStore(reducers)
