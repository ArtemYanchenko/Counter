import React, {FC} from 'react';
import classes from '../../App.module.css';
import Display from './Display';
import SuperButton from '../SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {CounterType, incrementCountAC, resetCountAC} from '../../redux/counterReducer';
import {AppRootStateType} from '../../redux/store';

type PropsType = {
    infoMessage:string
}


const CounterDisplay: FC<PropsType> = (
    {
        infoMessage,
    }) => {

    const dispatch = useDispatch()
    const {
        minCount,
        maxCount,
        currentCount,
        editMode
    } = useSelector<AppRootStateType,CounterType>(state => state.counter)

    const conditionValue = (value:number):boolean => {
        return (currentCount >= value || maxCount < 0 || minCount < 0 || maxCount <= minCount)
    }

    let disabledInc = conditionValue(maxCount) || editMode;
    let disabledReset = conditionValue(minCount) || editMode;

    const incrementCount = () => {dispatch(incrementCountAC())}
    const resetCount = () => {dispatch(resetCountAC())}

    return (
        <div className={classes.counterWrapper}>
            <Display count={currentCount}
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