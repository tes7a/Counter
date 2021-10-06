import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from "./components/Count.module.css";
import {Buttons} from "./components/Buttons";
import {Scoreboard} from "./components/Scoreboard";

function App() {
    let localStartString = localStorage.getItem('startValue');
    let localStartValue = Number(localStartString)
    let localMaxString = localStorage.getItem('maxValue')
    let localMaxValue = Number(localMaxString)


    const [max, setMax] = useState<number>(localMaxValue || 0)
    const [start, setStart] = useState<number>(localStartValue || 0)

    const [focusInput1, setFocusInput1] = useState(false)
    const [focusInput2, setFocusInput2] = useState(false)


    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newV = +e.currentTarget.value
        localStorage.setItem('startValue', JSON.stringify(newV))
        setStart(newV)
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newV = +e.currentTarget.value
        localStorage.setItem('maxValue', JSON.stringify(newV))
        setMax(newV)
    }

    const valueMax = max
    const valueMin = start

    const [number, setNumber] = useState<number>(valueMin)

    useEffect(() => {
        setNumber(valueMin)
    }, [valueMin])

    function maxValue() {
        if (number < valueMax) {
            setNumber(number + 1)
        }
    }

    function resetValue() {
        setNumber(valueMin)
    }


    function onClickHandler() {
        setFocusInput1(false)
        setFocusInput2(false)
    }


    return (
        <div className={s.Count}>
            <div>
                <div className={s.max}>
                    MaxValue: <input type={"number"} value={max} onChange={maxValueHandler}
                                     className={max <= start || start < 0 ? s.red : s.black}
                                     onFocus={() => setFocusInput1(true)}/>
                </div>
                <div className={s.start}>
                    StartValue: <input type={"number"} value={start}
                                       onChange={startValueHandler}
                                       className={max <= start || start < 0 ? s.red : s.black}
                                       onFocus={() => setFocusInput2(true)}/>
                </div>
                <div className={s.but}>
                    <Buttons onClick={onClickHandler} title={"set"}
                             dis={max <= start || start < 0 || (!focusInput1 && !focusInput2)}/>
                </div>
            </div>
            <Scoreboard value={number} valueMax={valueMax} max={max} start={start} focusInput1={focusInput1}
                        focusInput2={focusInput2}/>
            <div className='Buttons'>
                <Buttons onClick={maxValue} title={"inc"} dis={number === max || (focusInput1 || focusInput2)}/>
                <Buttons onClick={resetValue} title={"res"} dis={number === valueMin}/>
            </div>
        </div>
    );
}

export default App;
