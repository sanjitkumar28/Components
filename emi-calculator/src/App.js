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
    <div className="App" style={{backgroundColor:'cyan', height:'100vh'}}>
      <div className='form-container'>
       
        <h3>Mortage Calculator</h3> 
        <div>
        <h4>Principal</h4>
         <input type="number" value={principal} onChange={(e)=>setPrincipal(e.target.value)} width={200}/>
        </div>
         <div><h4>Rate</h4>
         <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)}/></div>
         <div>         <h4>Time</h4>
         <input type="number" value={time} onChange={(e)=>setTime(e.target.value)}/>
         </div>
         <button onClick={calculateEMI}>Calculate</button>
         <p>Your EMI is ${emi}</p>
        </div>
    </div>
  );
}

export default App;
