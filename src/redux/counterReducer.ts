import {Dispatch} from 'redux'
import {setInfoMessageAC, toggleEditModeAC} from './settingsReducer';
import {AppRootStateType} from './store';

const initialState: CounterType = {
    minCount: 0,
    maxCount: 5,
    currentCount: 0,
}

export const counterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case 'INCREMENT-COUNT': {
            return {...state, currentCount: state.currentCount + 1};
        }
        case 'RESET-COUNT': {
            return {...state, currentCount: state.minCount}
        }
        case 'SET-MIN-COUNT': {
            return {...state, minCount: action.newValue}
        }
        case 'SET-MAX-COUNT': {
            return {...state, maxCount: action.newValue}
        }
        case 'SET-CURRENT-COUNT': {
            return {...state, currentCount: action.newValue}
        }

        default: {
            return state;
        }
    }
}

//actions
export const incrementCountAC = () => ({
    type: 'INCREMENT-COUNT'
} as const)

export const resetCountAC = () => ({
    type: 'RESET-COUNT'
} as const)

export const setMinCountAC = (newValue: number) => ({
    type: 'SET-MIN-COUNT',
    newValue
} as const)

export const setMaxCountAC = (newValue: number) => ({
    type: 'SET-MAX-COUNT',
    newValue
} as const)

export const setCurrentCountAC = (newValue: number) => ({
    type: 'SET-CURRENT-COUNT',
    newValue
} as const)

export const setValuesCountAC = (min: number, max: number) => ({type: 'SEN-VALUES-COUNT', min, max} as const)


//thunks
export const setCounterValuesTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const counter = getState().counter;
    localStorage.setItem('minValue', JSON.stringify(counter.minCount));
    localStorage.setItem('maxValue', JSON.stringify(counter.maxCount));
    dispatch(setCurrentCountAC(counter.minCount))
    dispatch(toggleEditModeAC(false))
    dispatch(setInfoMessageAC(''))
}

export const getCounterValuesTC = () => (dispatch: Dispatch) => {
    const min = localStorage.getItem('minValue') || '0'
    const max = localStorage.getItem('maxValue') || '5'
    dispatch(setMinCountAC(+min))
    dispatch(setMaxCountAC(+max))
}

//types
export type CounterType = {
    minCount: number
    maxCount: number
    currentCount: number
}

type ActionsType =
    | ReturnType<typeof incrementCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setMinCountAC>
    | ReturnType<typeof setMaxCountAC>
    | ReturnType<typeof setCurrentCountAC>
    | ReturnType<typeof setValuesCountAC>



