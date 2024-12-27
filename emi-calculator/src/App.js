import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    if (principal && rate && time) {
      const monthlyRate =  rate / 12 /100;
      const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, time * 12)) /
      (Math.pow(1 + monthlyRate, time * 12) - 1);
    setEmi(emi);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [principal, rate, time]);

  const handleChange = (event) => {
    if (event.target.id === "principal") {
      setPrincipal(event.target.value);
    } else if (event.target.id === "rate") {
      setRate(event.target.value);
    } else {
      setTime(event.target.value);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: "cyan", height: "100vh" }}>
      <div className="form-container">
        <h3>Mortage Calculator</h3>
        <div>
          <h4>Principal</h4>
          <input
            type="number"
            value={principal}
            onChange={handleChange}
            width={200}
            id="principal"
          />
        </div>
        <div>
          <h4>Rate</h4>
          <input type="number" value={rate} onChange={handleChange} id="rate" />
        </div>
        <div>
          <h4>Time</h4>
          <input type="number" value={time} onChange={handleChange} id="time" />
        </div>
        <button onClick={calculateEMI}>Calculate</button>
        <p>Your EMI is ${emi}</p>
      </div>
    </div>
  );
}

export default App;
