import React, {useEffect, useState} from 'react';
import classes from '../../App.module.css';
import SuperInput from './SuperInput';
import SuperButton from '../SuperButton';
import {createDiffieHellman} from 'crypto';
import {useDispatch, useSelector} from 'react-redux';
import {CounterType, setMaxCountAC, setMinCountAC, toggleEditModeAC} from '../../redux/counterReducer';
import {AppRootStateType} from '../../redux/store';


type PropsType = {
    setCounter: () => void
    disableButtonSet: boolean
}

const CounterSettings: React.FC<PropsType> = (
    {
        setCounter,
        disableButtonSet,
    }) => {

    const dispatch = useDispatch()
    const counter = useSelector<AppRootStateType,CounterType>(state => state.counter)


    const returnErrorTrue = () => {
        disableButtonSet = true;
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

    return (
        <div className={classes.counterWrapper}>
            <SuperInput name="max value"
                        value={counter.maxCount}
                        callBack={seterMaxCount}
                        error={checkInputError(counter.maxCount) || checkInputError([counter.minCount, counter.maxCount])}
            />

            <SuperInput name="min value"
                        value={counter.minCount}
                        callBack={seterMinCount}
                        error={checkInputError(counter.minCount) || checkInputError([counter.minCount, counter.maxCount])}
            />

            <div className={classes.buttonWrapper}>
                <SuperButton name="set"
                             disabled={disableButtonSet}
                             callBack={() => {
                                 setCounter()
                             }}
                />
            </div>
        </div>
    );
};

export default CounterSettings;