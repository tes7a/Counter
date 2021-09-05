import React from "react";
import '../App.css';
import s from './Buttons.module.css'

type buttonsType = {
    onClick: () => void
    title: string
    dis: boolean
}

export const Buttons = (props: buttonsType) => {
    return (
        <div>
            <button className={props.dis === true ? s.bt : s.bs} onClick={props.onClick}
                    disabled={props.dis}>{props.title}</button>
        </div>)
}