import React, {FC} from 'react';
import classes from '../../App.module.css';
import Display from './Display';
import SuperButton from '../SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {CounterType, incrementCountAC, resetCountAC} from '../../redux/counterReducer';
import {AppRootStateType} from '../../redux/store';
import {setInfoMessageAC, SettingType} from '../../redux/settingsReducer';

const CounterDisplay: FC = () => {
    const dispatch = useDispatch()
    const {
        minCount,
        maxCount,
        currentCount,
    } = useSelector<AppRootStateType, CounterType>(state => state.counter)

    const {editMode, infoMessage} = useSelector<AppRootStateType, SettingType>(state => state.settings)


    const conditionValue = (): boolean => {
        return (maxCount < 0 || minCount < 0 || maxCount <= minCount)
    }

    let disabledInc = currentCount >= maxCount || conditionValue() || editMode;
    let disabledReset = currentCount <= minCount || conditionValue() || editMode;

    const incrementCount = () => {dispatch(incrementCountAC())}
    const resetCount = () => {dispatch(resetCountAC())}

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