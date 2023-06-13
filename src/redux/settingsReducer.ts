const initialState: SettingType = {
    editMode: false,
    infoMessage: ''
}

export const settingsReducer = (state = initialState, action: ActionsType): SettingType => {
    switch (action.type) {
        case 'TOGGLE-EDIT-MODE': {
            return {...state, editMode: action.newValue}
        }
        case 'SET-INFO-MESSAGE': {
            return {...state, infoMessage: action.newInfoMessage}
        }
        default: {
            return state;
        }
    }
}

//actions
export const toggleEditModeAC = (newValue: boolean) => ({
    type: 'TOGGLE-EDIT-MODE',
    newValue
} as const)

export const setInfoMessageAC = (newInfoMessage: InfoMessageType) => ({
    type: 'SET-INFO-MESSAGE',
    newInfoMessage
} as const)

//types
export type SettingType = {
    editMode: boolean
    infoMessage: InfoMessageType
}
export type InfoMessageType = '' | 'press set' | 'incorrect range!'
type ActionsType =
    | ReturnType<typeof toggleEditModeAC>
    | ReturnType<typeof setInfoMessageAC>