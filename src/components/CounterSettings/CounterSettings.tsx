import React, {useState} from 'react';
import classes from '../../App.module.css';
import SuperInput from './SuperInput';
import SuperButton from '../SuperButton';


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


    if (minCount >= maxCount) {
        errorMin = true;
        errorMax = true;
        disableButtonSet = true;
    }
    if (maxCount < 0) {
        errorMax = true;
        disableButtonSet = true;
    }
    if (minCount < 0) {
        errorMin = true;
        disableButtonSet = true;
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
                        error={errorMax}
            />

            <SuperInput name="min value"
                        value={minCount}
                        callBack={seterMinCountHandler}
                        error={errorMin}
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