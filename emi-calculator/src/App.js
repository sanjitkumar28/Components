import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [principal,setPrincipal]=useState(0);
  const [rate,setRate]=useState(0);
  const [time,setTime]=useState(0);
  const [emi,setEmi]=useState(0);

  const calculateEMI=()=>{
    const emi=(principal*rate*Math.pow(1+rate,time))/(Math.pow(1+rate,time)-1);
    setEmi(emi);
  }
  
  return (
    <div className="App" style={{backgroundColor:'cyan'}}>
      <div style={{border:'1px solid black', margin:'auto',width:'50%', background:'white'}}>
         Mortage Calculator
         <h4>Principal</h4>
         <input type="number" value={principal} onChange={(e)=>setPrincipal(e.target.value)} width={200}/>
         <h4>Rate</h4>
         <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)}/>
         <h4>Time</h4>
         <input type="number" value={time} onChange={(e)=>setTime(e.target.value)}/>
         <button onClick={calculateEMI}>Calculate</button>
         <p>Your EMI is ${emi}</p>
        </div>
    </div>
  );
}

export default App;
