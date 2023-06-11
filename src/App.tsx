import React from 'react';
import classes from './App.module.css'
import CounterSettings from './components/CounterSettings/CounterSettings';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';

function App() {
    return (
        <div className={classes.App}>
            <CounterSettings/>
            <CounterDisplay/>
        </div>
    );
}

export default App;