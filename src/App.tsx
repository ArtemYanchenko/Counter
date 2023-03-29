import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import CounterSettings from './components/CounterSettings/CounterSettings';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';

function App() {

    const [minCount, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [count, setCount] = useState<number>(minCount)
    const [editMode, setEditMode] = useState<boolean>(false)
    let infoMessage = '';

    useEffect(() => {
        const min = localStorage.getItem('minValue')
        min && setMinCount(+min)

        const max = localStorage.getItem('maxValue')
        max && setMaxCount(+max)

        min && setCount(+min);
    }, [])

    const incrementCount = () => setCount(count + 1);
    const resetCount = () => setCount(minCount);

    const seterMaxCount = (newValue: number) => {
        setMaxCount(newValue);
        setEditMode(true);
    }

    const seterMinCount = (newValue: number) => {
        setMinCount(newValue);
        setEditMode(true);

    }

    const setCounter = () => {
        setCount(minCount);
        setEditMode(false)
        localStorage.setItem('minValue', JSON.stringify(minCount))
        localStorage.setItem('maxValue', JSON.stringify(maxCount))
    }

    let disabledInc = (count >= maxCount) || editMode;
    let disabledReset = (count <= minCount) || editMode;

    if (editMode) {
        infoMessage = 'press set'
    }
    if (minCount >= maxCount || minCount < 0 || maxCount < 0) {
        infoMessage = 'incorrect range!'
    }


    return (
        <div className={classes.App}>
            <CounterSettings
                minCount={minCount}
                maxCount={maxCount}
                seterMinCount={seterMinCount}
                seterMaxCount={seterMaxCount}
                setCounter={setCounter}
                disableButtonSet={!editMode}
            />
            <CounterDisplay
                count={count}
                maxCount={maxCount}
                infoMessage={infoMessage}
                incrementCount={incrementCount}
                resetCount={resetCount}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
            />


        </div>

    );
}

export default App;
