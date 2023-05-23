import React, {useEffect} from 'react';
import classes from './App.module.css'
import CounterSettings from './components/CounterSettings/CounterSettings';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import {useDispatch} from 'react-redux';
import {setCurrentCountAC, setMaxCountAC, setMinCountAC} from './redux/counterReducer';

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        const min = localStorage.getItem('minValue')
        min && dispatch(setMinCountAC(+min))

        const max = localStorage.getItem('maxValue')
        max && dispatch(setMaxCountAC(+max))

        min && dispatch(setCurrentCountAC(+min))
    }, [dispatch])

    return (
        <div className={classes.App}>
            <CounterSettings/>
            <CounterDisplay/>
        </div>
    );
}

export default App;