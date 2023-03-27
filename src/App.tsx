import React, {useState} from 'react';
import classes from './App.module.css'
import SuperButton from './components/SuperButton';
import SuperInput from './components/SuperInput';
import Display from './components/Display';
import Settings from './components/Settings';

function App() {


    const [minCount, setMinCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(5);
    const [count, setCount] = useState<number>(minCount)
    const [editMode,setEditMode] = useState(false)

    let errorMax = false;
    let errorMin = false;
    let infoMessage = '';

    // if (minCount >= maxCount || minCount<0) {
    //     errorMin = true;
    //     errorMax = true;
    //     infoMessage = 'incorrent range';
    // } else if (editMode){
    //     infoMessage = 'press set';
    // }


    if(minCount<0){
        errorMin = true;
        infoMessage = 'incorrent range';
    } else if (minCount>=maxCount){
        errorMin = true;
        infoMessage = 'incorrent range';
    } else if (editMode){
        infoMessage = 'press set'
    }


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
                errorMax={errorMax}
                errorMin={errorMin}
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
