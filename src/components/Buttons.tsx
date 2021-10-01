import React from "react";
import '../App.css';
import s from './Buttons.module.css'

type buttonsType = {
    onClick: () => void
    title: string
    dis?: boolean
}

export const Buttons = (props: buttonsType) => {
    const callBackHandler = () => {
        props.onClick()
    }

    return (
        <div>
            <button className={props.dis === true ? s.bt : s.bs} onClick={callBackHandler}
                    disabled={props.dis}><span style={{fontSize: "10px"}}>{props.title}</span></button>
        </div>)
}