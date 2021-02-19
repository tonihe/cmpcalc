import './App.css';
import React,{useState} from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function App() {

  const [amount, setAmount] = useState();
  const [rate, setRate] = useState();
  const [year, setYear] = useState();
  const [result, setResult] = useState();
  var byYear;

  const Calculate = () => {

    // R = A(1+(R/N)^Y)^(NY)
    const result = amount * Math.pow(1 + rate, year);
    setResult(result.toFixed(2))
    console.log(result)
    for(var i = 0; i < year; i++){
      byYear = amount * Math.pow(1 + rate, i);
      console.log("Year " + i + " : " + byYear.toFixed(2));
      var ul = document.getElementById("list");
      var li = document.createElement("p");
      li.appendChild(document.createTextNode("Year " + i + " : " + byYear.toFixed(2)));
      ul.appendChild(li);
    }
  }
  
  const Clear = () => {
    document.getElementById("calcForm").reset();
    setAmount(0);
    setRate(0);
    setYear(0);
    setResult(0);
    document.getElementById("list").innerText = "";
  }
  return (

    <div className="App">
     
    <h1>Compound Interest Calculator</h1>

    <div className="Calculator">

    <form id="calcForm" noValidate autoComplete="off">
    <TextField 
      id="standard-basic" 
      label="Initial Amount"
      onChange={(e) => setAmount(parseInt(e.target.value))} />

    <TextField 
      id="standard-basic" 
      label="Interest Rate"
      onChange={(e) => setRate(parseInt(e.target.value)/100)} />

    <TextField 
      id="standard-basic"  
      label="Years to Maturity"
      onChange={(e) => setYear(parseInt(e.target.value))} /> 
    <Button variant="contained" color="primary" onClick={()=>{Calculate()}}>Calculate</Button>
    <Button variant="contained" color="primary" onClick={()=>{Clear()}}>Clear</Button>   
  

    </form>
    <h2>Total return at maturity:</h2>
    <h2>{result}</h2>
    <div id="list"></div>
    
    

    </div>
    </div>
  );
}

export default App;
