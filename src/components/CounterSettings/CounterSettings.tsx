import React, {FC} from 'react';
import classes from '../../App.module.css';
import SuperInput from './SuperInput';
import SuperButton from '../SuperButton';
import {setCounterValuesTC, setMaxCountAC, setMinCountAC} from '../../redux/counterReducer';
import {toggleEditModeAC} from '../../redux/settingsReducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';


const CounterSettings: FC = () => {
    const dispatch = useAppDispatch()
    const {minCount, maxCount} = useAppSelector(state => state.counter)

    const {editMode} = useAppSelector(state => state.settings)

    const returnErrorTrue = () => {
        if (editMode) {
            dispatch(toggleEditModeAC(false))
        }
        return true
    }

    const checkInputError = (value: number | number[]) => {
        if (Array.isArray(value)) {
            if (value[0] >= value[1]) {
                return returnErrorTrue()
            }
        }
        if (value < 0) {
            return returnErrorTrue()
        }
        return false
    }

    const seterMaxCount = (newValue: number) => {
        dispatch(setMaxCountAC(newValue))
        dispatch(toggleEditModeAC(true))
    }

    const seterMinCount = (newValue: number) => {
        dispatch(setMinCountAC(newValue))
        dispatch(toggleEditModeAC(true))
    }

    const setCounter = () => {
        dispatch(setCounterValuesTC())
    }

    return (
        <div className={classes.counterWrapper}>
            <SuperInput name="max value"
                        value={maxCount}
                        callBack={seterMaxCount}
                        error={checkInputError(maxCount) || checkInputError([minCount, maxCount])}
            />
            <SuperInput name="min value"
                        value={minCount}
                        callBack={seterMinCount}
                        error={checkInputError(minCount) || checkInputError([minCount, maxCount])}
            />
            <div className={classes.buttonWrapper}>
                <SuperButton name="set"
                             disabled={!editMode}
                             callBack={setCounter}
                />
            </div>
        </div>
    );
};

export default CounterSettings;