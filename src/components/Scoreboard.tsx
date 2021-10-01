import React from "react";
import '../App.css';
import s from "./ScoreBoard.module.css"

type scoreboardType = {
    value: number
    valueMax: number
    init: boolean
}

export const Scoreboard = (props: scoreboardType) => {

    return (
        <div className={props.value === props.valueMax ? s.red : s.black}>
            {props.init ? props.value : 'enter values and press "set"'}
        </div>)
}