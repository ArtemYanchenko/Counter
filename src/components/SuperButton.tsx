import React from 'react';

type PropsType = {
    name: string
    disabled: boolean
    callBack: () => void
}

const SuperButton: React.FC<PropsType> = (
    {
        name,
        disabled,
        callBack
    }) => {

    return (
        <button disabled={disabled} onClick={callBack}>{name}</button>
    );
};

export default SuperButton;