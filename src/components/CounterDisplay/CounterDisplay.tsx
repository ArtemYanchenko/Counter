import React, {FC} from 'react';
import classes from '../../App.module.css';
import Display from './Display';
import SuperButton from '../SuperButton';
import {useDispatch} from 'react-redux';
import {incrementCountAC, resetCountAC} from '../../redux/counterReducer';

type PropsType = {
    count:number
    maxCount:number
    infoMessage:string
    disabledInc:boolean
    disabledReset:boolean

}


const CounterDisplay: FC<PropsType> = (
    {
        count,
        maxCount,
        infoMessage,
        disabledInc,
        disabledReset,
    }) => {

    const dispatch = useDispatch()

    const incrementCount = () => {dispatch(incrementCountAC())}
    const resetCount = () => {dispatch(resetCountAC())}

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