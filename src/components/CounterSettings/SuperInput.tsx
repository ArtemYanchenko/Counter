import React, {ChangeEvent} from 'react';
import classes from '../../App.module.css';

type PropsType = {
    name:string
    value:number
    callBack:(newValue:number)=>void
    error:boolean
}

const SuperInput:React.FC<PropsType> = (
    {
        name,
        value,
        callBack,
        error,
    }) => {

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        callBack(Number(e.currentTarget.value))
    }
    return (
        <div>
            <span>{name}: </span>
            <input
                className={error ? classes.errorInput : ''}
                type="number"
                value={value}
                onChange={onChangeInputHandler}/>
        </div>
    );
};

export default SuperInput;