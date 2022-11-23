import {combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
                    dishes: Dishes,
                    comments: Comments,
                    promotions: Promotions,
                    leaders: Leaders
                });

export const reduxStore = configureStore({
                                    reducer: rootReducer,
                                    middleware: [...getDefaultMiddleware(),  sagaMiddleware] })

sagaMiddleware.run(mySaga);


