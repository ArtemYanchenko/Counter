import React from 'react';
import classes from '../../App.module.css';

type PropsType = {
    count: number
    infoMessage: string
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
            {infoMessage === ''
                ? <span className={count >= maxCount ? classes.redDisplay : ''}>{count}</span>
                : <span className={classes.infoMessage}>{infoMessage}</span>
            }
        </div>
    );
};

export default Display;