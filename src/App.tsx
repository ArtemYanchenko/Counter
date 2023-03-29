import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import SuperButton from './components/SuperButton';
import SuperInput from './components/SuperInput';
import Display from './components/Display';
import Settings from './components/Settings';

function App() {

// localStorage.clear();

    const [minCount, setMinCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(5);
    const [count, setCount] = useState<number>(minCount)
    const [editMode,setEditMode] = useState(false)

    useEffect(()=>{
        const min = localStorage.getItem('minValue')
        min && setMinCount(+min)

        const max = localStorage.getItem('maxValue')
        max && setMaxCount(+max)

        min && setCount(+min);
    },[])


    let infoMessage = '';

    if(editMode) {
        infoMessage = 'press set'
    }
    // editMode ? infoMessage = 'press set' : '';

    const [errorInput,setErrorInput] = useState(false)

    const incrementCount = () => setCount(count + 1);
    const resetCount = () => setCount(minCount);

    const seterMaxCount = (newValue: number) => {
        if(newValue<minCount) {
            setErrorInput(true)
        }else {
            setErrorInput(false)
        setMaxCount(newValue);
        setEditMode(true);
    }}

    const seterMinCount = (newValue: number) => {
        if (newValue > maxCount || newValue < 0) {
            setErrorInput(true)
        }
        else {
            setErrorInput(false)
            setMinCount(newValue);
            setEditMode(true);
        }
    }
    // переписать функции seterMin & seterMax

    const setCounter = () => {
        setCount(minCount);
        setEditMode(false)
        localStorage.setItem('minValue',JSON.stringify(minCount))
        localStorage.setItem('maxValue',JSON.stringify(maxCount))
    }

    let disabledInc = (count >= maxCount) || editMode;
    let disabledReset = (count <= minCount) || editMode;

    return (
        <div className={classes.App}>
            <Settings
                minCount={minCount}
                maxCount={maxCount}
                seterMinCount={seterMinCount}
                seterMaxCount={seterMaxCount}
                setCounter={setCounter}
                disableButtonSet={!editMode}
                errorMax={errorInput}
                errorMin={errorInput}
            />
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
        </div>

    );
}

export default App;
