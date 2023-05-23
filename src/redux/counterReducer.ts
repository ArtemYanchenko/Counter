export type CounterType = {
    minCount: number
    maxCount: number
    currentCount: number

}

const initialState: CounterType = {
    minCount: 0,
    maxCount: 5,
    currentCount: 0,
}

type ActionsType = IncrementCountACType
    | ResetCountACType
    | SetMinCountACType
    | SetMaxCountACType
    | SetCurrentCountACType

export const counterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case 'INCREMENT-COUNT': {
            return {...state, currentCount: state.currentCount + 1};
        }
        case 'RESET-COUNT': {
            return {...state, currentCount: state.minCount}
        }
        case 'SET-MIN-COUNT':{
            return {...state,minCount:action.payload.newValue}
        }
        case 'SET-MAX-COUNT':{
            return {...state,maxCount:action.payload.newValue}
        }
        case 'SET-CURRENT-COUNT':{
            return {...state,currentCount:action.payload.newValue}
        }

        default: {
            return state;
        }
    }
}

type IncrementCountACType = ReturnType<typeof incrementCountAC>
export const incrementCountAC = () => {
    return {
        type: 'INCREMENT-COUNT'
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: 'RESET-COUNT'
    } as const
}

type SetMinCountACType = ReturnType<typeof setMinCountAC>
export const setMinCountAC = (newValue: number) => {
    return {
        type: 'SET-MIN-COUNT',
        payload: {
            newValue
        }
    } as const
}

type SetMaxCountACType = ReturnType<typeof setMaxCountAC>
export const setMaxCountAC = (newValue: number) => {
    return {
        type: 'SET-MAX-COUNT',
        payload: {
            newValue
        }
    } as const
}

type SetCurrentCountACType = ReturnType<typeof setCurrentCountAC>
export const setCurrentCountAC = (newValue: number) => {
    return {
        type: 'SET-CURRENT-COUNT',
        payload: {
            newValue
        }
    } as const
}





