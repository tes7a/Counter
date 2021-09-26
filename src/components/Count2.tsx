import React, {useEffect, useState} from "react";
import '../App.css';
import {Scoreboard} from "./Scoreboard";
import {Buttons} from "./Buttons";

export const Count2 = () => {
    const valueMax = 5
    const valueMin = 0

    const [number, setNumber] = useState<number>(valueMin)

    useEffect(() => {
        let numberAsString = localStorage.getItem("counterNumber")
        if (numberAsString) {
            let newNumber = JSON.parse(numberAsString)
            setNumber(newNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterNumber", JSON.stringify(number))
    }, [number])

    function maxValue() {
        if (number < valueMax) {
            setNumber(number + 1)
        }
    }

    function resetValue() {
        setNumber(valueMin)
    }

    return (
        <div className="Count2">
            <Scoreboard value={number} valueMax={valueMax}/>
            <div className='Buttons2'>
                <Buttons onClick={maxValue} title={"+"} dis={number === valueMax}/>
                <Buttons onClick={resetValue} title={"-"} dis={number === valueMin}/>
            </div>
        </div>)
}