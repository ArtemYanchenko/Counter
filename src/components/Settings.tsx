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
}

const Settings:React.FC<PropsType> = (
    {
        minCount,
        maxCount,
        seterMinCount,
        seterMaxCount,
        setCounter,
    }) => {

    const [disabledSetButton, setDisabledSetButton] = useState(true);

    const seterMaxCountHandler = (newValue:number) => {
        seterMaxCount(newValue);
        setDisabledSetButton(false)
    }
    const seterMinCountHandler = (newValue:number) => {
        seterMinCount(newValue);
        setDisabledSetButton(false)
    }

    const setCounterHandler = () => {
        setCounter();
        setDisabledSetButton(true);
    }

    return (
        <div className={classes.counterWrapper}>
            <SuperInput name="max value"
                        value={maxCount}
                        callBack={seterMaxCountHandler}
            />

            <SuperInput name="min value"
                        value={minCount}
                        callBack={seterMinCountHandler}
            />

            <div className={classes.buttonWrapper}>
                <SuperButton name="set"
                             disabled={disabledSetButton}
                             callBack={setCounterHandler}
                />
            </div>
        </div>
    );
};

export default Settings;