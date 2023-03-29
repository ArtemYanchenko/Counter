import React, {FC} from 'react';
import classes from '../../App.module.css';
import Display from './Display';
import SuperButton from '../SuperButton';

type PropsType = {
    count:number
    maxCount:number
    infoMessage:string
    incrementCount: () => void
    resetCount: () => void
    disabledInc:boolean
    disabledReset:boolean

}


const CounterDisplay: FC<PropsType> = (
    {
        count,
        maxCount,
        infoMessage,
        incrementCount,
        resetCount,
        disabledInc,
        disabledReset,
    }) => {
    return (
        <div className={classes.counterWrapper}>
            <Display count={count}
                     infoMessage={infoMessage}
                     maxCount={maxCount}
            />
            <div className={classes.buttonWrapper}>
                <SuperButton
                    name="inc"
                    disabled={disabledInc}
                    callBack={incrementCount}
                />
                <SuperButton
                    name="reset"
                    disabled={disabledReset}
                    callBack={resetCount}
                />
            </div>
        </div>
    );
};

export default CounterDisplay;