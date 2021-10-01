import React, {ChangeEvent, useState} from "react";

type InputType = {
    callBack: (value: number) => void
    value: number
    errorInp: boolean
}

export const Input: React.FC<InputType> = ({callBack, value}) => {
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        callBack(+e.currentTarget.value)
    }

    return (
        <input type={"number"} value={value} onChange={onChange}/>
    )
}