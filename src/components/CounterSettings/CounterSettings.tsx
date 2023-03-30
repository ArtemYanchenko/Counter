import React, {useEffect, useState} from 'react';
import classes from '../../App.module.css';
import SuperInput from './SuperInput';
import SuperButton from '../SuperButton';
import {createDiffieHellman} from 'crypto';


type PropsType = {
    minCount: number
    maxCount: number
    seterMinCount: (newValue: number) => void
    seterMaxCount: (newValue: number) => void
    setCounter: () => void
    disableButtonSet: boolean
}

const CounterSettings: React.FC<PropsType> = (
    {
        minCount,
        maxCount,
        seterMinCount,
        seterMaxCount,
        setCounter,
        disableButtonSet,
    }) => {

    let errorMin = false;
    let errorMax = false


    // if (minCount >= maxCount) {
    //     errorMin = true;
    //     errorMax = true;
    //     disableButtonSet = true;
    // }
    // if (maxCount < 0) {
    //     errorMax = true;
    //     disableButtonSet = true;
    // }
    // if (minCount < 0) {
    //     errorMin = true;
    //     disableButtonSet = true;
    // }

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

    const seterMaxCountHandler = (newValue: number) => {
        seterMaxCount(newValue);
    }
    const seterMinCountHandler = (newValue: number) => {
        seterMinCount(newValue);
    }

    return (
        <div className={classes.counterWrapper}>
            <SuperInput name="max value"
                        value={maxCount}
                        callBack={seterMaxCountHandler}
                        error={checkInputError(maxCount) || checkInputError([minCount, maxCount])}
            />

            <SuperInput name="min value"
                        value={minCount}
                        callBack={seterMinCountHandler}
                        error={checkInputError(minCount) || checkInputError([minCount, maxCount])}
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