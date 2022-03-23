import React from 'react';
import s from './app.module.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    return (
        <div className={s.container}>
            <Counter/>
        </div>
    )
}

export default App;
