import {useState} from 'react'

const Counter=()=>{
    const [currentNumber,setCurrentNumber]=useState(0);
    const [incrementStep,setIncrementStep]=useState(1);
    const handleChange=(event)=>{
        console.log('v',event.target);
        setIncrementStep(event.target.value);
    }

    const handleIncrement=()=>{
        console.log('incr',incrementStep);
        console.log('curr',currentNumber);
        setCurrentNumber(Number(incrementStep)+Number(currentNumber));
    }
    const handleDecrement=()=>{
        setCurrentNumber(currentNumber-incrementStep);
    }
    const handleReset=()=>{
        setCurrentNumber(0);
    }
   return(
    <div>
        <h5>Counter</h5>
        <p>Number</p>
        <p>Inc:Dec {currentNumber}</p>
        <input type="number" value={incrementStep} onChange={handleChange}></input>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
    </div>
   )
}

export default Counter;