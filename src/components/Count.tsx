import React, {useEffect, useState} from "react";
import '../App.css';
import {Scoreboard} from "./Scoreboard";
import {Buttons} from "./Buttons";
import {Input} from "./Input";
import s from "./Count.module.css"

type CountType = {
    max: number
    start: number
    setMax: (value: number) => void
    setStart: (value: number) => void
    init: boolean
    setInit: (value: boolean) => void
    errorInp: boolean
    setErrorInp: (value: boolean) => void
}

export const Count: React.FC<CountType> = ({max, start, setMax, setStart, init, setInit,...restProp}) => {
    const valueMax = max
    const valueMin = start

    const [number, setNumber] = useState<number>(valueMin)

    useEffect(() => {
        setNumber(valueMin)
    }, [valueMin])

    // useEffect(() => {
    //     let numberAsString = localStorage.getItem("counterNumber")
    //     if (numberAsString) {
    //         let newNumber = JSON.parse(numberAsString)
    //         setNumber(newNumber)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem("counterNumber", JSON.stringify(number))
    // }, [number])

    function maxValue() {
        if (number < valueMax) {
            setNumber(number + 1)
        }
    }

    function resetValue() {
        setNumber(valueMin)
    }

    function maxValueInput(value: number) {
        setMax(value)
        // if(value)
    }

    function minValueInput(value: number) {
        setStart(value)
    }

    function initText() {
        setInit(init = true)
    }

    return (
        <div className={s.Count}>
            <div>
                <div className={s.max}>
                    MaxValue: <Input callBack={maxValueInput} value={max} errorInp={restProp.errorInp}/>
                </div>
                <div className={s.start}>
                    StartValue: <Input callBack={minValueInput} value={start} errorInp={restProp.errorInp}/>
                </div>
                <div className={s.but}>
                    <Buttons onClick={initText} title={"set"} dis={max === start}/>
                </div>
            </div>
            <Scoreboard value={number} valueMax={valueMax} init={init}/>
            <div className='Buttons'>
                <Buttons onClick={maxValue} title={"inc"} dis={number === max}/>
                <Buttons onClick={resetValue} title={"res"} dis={number === valueMin}/>
            </div>
        </div>)
}