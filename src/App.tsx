import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import CounterSettings from './components/CounterSettings/CounterSettings';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {CounterType, setCurrentCountAC, setMaxCountAC, setMinCountAC, toggleEditModeAC} from './redux/counterReducer';

function App() {

    const {minCount,maxCount,currentCount,editMode} = useSelector<AppRootStateType,CounterType>(state=>state.counter)

    const dispatch = useDispatch()

    let infoMessage = '';

    useEffect(() => {
        const min = localStorage.getItem('minValue')
        min && dispatch(setMinCountAC(+min))

        const max = localStorage.getItem('maxValue')
        max && dispatch(setMaxCountAC(+max))

        min && dispatch(setCurrentCountAC(+min))
    }, [])

    const setCounter = () => {
        dispatch(setCurrentCountAC(minCount))
        dispatch(toggleEditModeAC(false))
        localStorage.setItem('minValue', JSON.stringify(minCount))
        localStorage.setItem('maxValue', JSON.stringify(maxCount))
    }

    let disabledInc = (currentCount >= maxCount) || editMode;
    let disabledReset = (currentCount <= minCount) || editMode;

    if (editMode) {
        infoMessage = 'press set'
    }
    if (minCount >= maxCount || minCount < 0 || maxCount < 0) {
        infoMessage = 'incorrect range!'
    }

    return (
        <div className={classes.App}>
            <CounterSettings
                setCounter={setCounter}
                disableButtonSet={!editMode}
            />
            <CounterDisplay
                count={currentCount}
                maxCount={maxCount}
                infoMessage={infoMessage}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
            />
        </div>

    );
}

export default App;
