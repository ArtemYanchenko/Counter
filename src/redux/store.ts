import { combineReducers, legacy_createStore } from "redux";
import {counterReducer} from './counterReducer';
import {settingsReducer} from './settingsReducer';

const rootReducer = combineReducers({
    counter:counterReducer,
    settings: settingsReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer);

