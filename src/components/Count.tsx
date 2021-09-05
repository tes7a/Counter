import React, {useState} from "react";
import '../App.css';
import {Scoreboard} from "./Scoreboard";
import {Buttons} from "./Buttons";

export const Count = () => {
    const valueMax = 5
    const valueMin = 0

    const [number, setNumber] = useState<number>(valueMin)

    function maxValue() {
        if (number < valueMax) {
            setNumber(number + 1)
        }
    }

    function resetValue() {
        setNumber(valueMin)
    }


    return (
        <div className="Count">
            <Scoreboard value={number} valueMax={valueMax}/>
            <div className='Buttons'>
                <Buttons onClick={maxValue} title={"Inc"} dis={number === valueMax}/>
                <Buttons onClick={resetValue} title={"Rest"} dis={number === valueMin}/>
            </div>
        </div>)
}