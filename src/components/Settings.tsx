import React, {useState} from 'react';
import classes from '../App.module.css';
import SuperInput from './SuperInput';
import SuperButton from './SuperButton';


type PropsType = {
    minCount:number
    maxCount:number
    seterMinCount:(newValue:number)=>void
    seterMaxCount:(newValue:number)=>void
    setCounter:()=>void
    disableButtonSet:boolean
    errorMax:boolean
    errorMin:boolean
}

const Settings:React.FC<PropsType> = (
    {
        minCount,
        maxCount,
        seterMinCount,
        seterMaxCount,
        setCounter,
        disableButtonSet,
        errorMax,
        errorMin,
    }) => {



    const seterMaxCountHandler = (newValue:number) => {
        seterMaxCount(newValue);
    }
    const seterMinCountHandler = (newValue:number) => {
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
                             callBack={() => {setCounter()}}
                />
            </div>
        </div>
    );
};

export default Settings;