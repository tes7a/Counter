import React from "react";
import '../App.css';
import s from "./ScoreBoard.module.css"

type scoreboardType = {
    value: number
    valueMax: number
}

export const Scoreboard = (props: scoreboardType) => {

    return (
        <div className={props.value === props.valueMax ? s.red : s.black}>
            {props.value}
        </div>)
}