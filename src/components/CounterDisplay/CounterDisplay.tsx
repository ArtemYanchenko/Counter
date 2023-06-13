import React, {FC} from 'react';
import classes from '../../App.module.css';
import Display from './Display';
import SuperButton from '../SuperButton';
import {incrementCountAC, resetCountAC} from '../../redux/counterReducer';
import {setInfoMessageAC} from '../../redux/settingsReducer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

const CounterDisplay: FC = () => {
    const dispatch = useAppDispatch()
    const {
        minCount,
        maxCount,
        currentCount,
    } = useAppSelector(state => state.counter)

    const {editMode, infoMessage} = useAppSelector(state => state.settings)

    const conditionValue = ():boolean => maxCount < 0 || minCount < 0 || maxCount <= minCount

    let disabledInc = currentCount >= maxCount || conditionValue() || editMode;
    let disabledReset = currentCount <= minCount || conditionValue() || editMode;

    const incrementCount = () => {
        dispatch(incrementCountAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    if (editMode && infoMessage !== 'press set') {
        dispatch(setInfoMessageAC('press set'))
    }
    if ((minCount >= maxCount || minCount < 0 || maxCount < 0) && infoMessage !== 'incorrect range!') {
        dispatch(setInfoMessageAC('incorrect range!'))
    }

    return (
        <div className={classes.counterWrapper}>
            <Display count={currentCount}
                     infoMessage={infoMessage}
                     maxCount={maxCount}
            />
            <div className={classes.buttonWrapper}>
                <SuperButton
                    name="+1"
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