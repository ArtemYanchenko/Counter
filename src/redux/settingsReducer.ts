export type InfoMessageType =  '' | 'press set' | 'incorrect range!'

export type SettingType = {
    editMode: boolean
    infoMessage: InfoMessageType
}

type ActionsType = ToggleEditModeACType | SetInfoMessageACType

const initialState: SettingType = {
    editMode: false,
    infoMessage: ''
}

export const settingsReducer = (state = initialState, action: ActionsType): SettingType => {
    switch (action.type) {
        case 'TOGGLE-EDIT-MODE': {
            return {...state, editMode: action.payload.newValue}
        }
        case 'SET-INFO-MESSAGE': {
            return {...state,infoMessage:action.payload.newInfoMessage}
        }
        default: {
            return state;
        }
    }
}


type ToggleEditModeACType = ReturnType<typeof toggleEditModeAC>
export const toggleEditModeAC = (newValue: boolean) => {
    return {
        type: 'TOGGLE-EDIT-MODE',
        payload: {
            newValue
        }
    } as const
}

type SetInfoMessageACType = ReturnType<typeof setInfoMessageAC>
export const setInfoMessageAC = (newInfoMessage:InfoMessageType) => {
    return {
        type: 'SET-INFO-MESSAGE',
        payload:{
            newInfoMessage
        }
    } as const
}