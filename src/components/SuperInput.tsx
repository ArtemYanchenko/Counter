import React, {ChangeEvent} from 'react';
import classes from '../App.module.css';

type PropsType = {
    name:string
    value:number
    callBack:(newValue:number)=>void
}

const SuperInput:React.FC<PropsType> = (
    {
        name,
        value,
        callBack,
    }) => {

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        callBack(Number(e.currentTarget.value))
    }
    return (
        <div>
            <span>{name}: </span>
            <input
                type="number"
                value={value}
                onChange={onChangeInputHandler}/>
        </div>
    );
};

export default SuperInput;