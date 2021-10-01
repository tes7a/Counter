import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";

function App() {
    const[max,setMax] = useState<number>(0)
    const[start,setStart] = useState<number>(0)
    const [init, setInit] = useState(false)
    const [errorInp, setErrorInp] = useState(false)

    return (
        <div>
            <Count max={max} start={start}
                   setMax={setMax} setStart={setStart} init={init} setInit={setInit}
                   errorInp={errorInp} setErrorInp={setErrorInp}
            />
        </div>
    );
}

export default App;
