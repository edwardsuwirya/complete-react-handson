import {combineReducers, configureStore} from '@reduxjs/toolkit'
import jsonPlaceHolderReducer from './features/jsonPlaceHolder/state/jsonPlaceHolderSlice';

const rootReducer = combineReducers({
    jsonPlaceHolder: jsonPlaceHolderReducer
})

export const setupStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}
