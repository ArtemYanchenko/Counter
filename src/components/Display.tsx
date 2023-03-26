import React from 'react';
import classes from '../App.module.css';

type PropsType = {
    count: number
    infoMessage: boolean
    maxCount: number
}

const Display: React.FC<PropsType> = (
    {
        count,
        infoMessage,
        maxCount
    }) => {
    return (
        <div className={classes.display}>
            {infoMessage
                ? <span className={classes.infoMessage}>enter values and press 'set'</span>
                : <span className={count >= maxCount ? classes.redDisplay : ''}>{count}</span>
            }
            {/*<span className={count >= maxCount ? classes.redDisplay : ''}>{count}</span>*/}
        </div>
    );
};

export default Display;