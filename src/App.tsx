import React, {useEffect} from 'react';
import classes from './App.module.css'
import CounterSettings from './components/CounterSettings/CounterSettings';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import {getCounterValuesTC} from './redux/counterReducer';
import {useAppDispatch} from './redux/hooks';

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCounterValuesTC())
    }, [dispatch])
    return (
        <div className={classes.App}>

            <CounterSettings/>
            <CounterDisplay/>
        </div>
    );
}

export default App;