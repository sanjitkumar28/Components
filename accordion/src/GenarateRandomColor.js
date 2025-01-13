import React from "react";
import { useState } from "react";
const GenerateRandomColor=()=>{
 const [colorCode,setColorCode]=useState('rgb');
 const [color,setColor]=useState('white');
 
 const changeColorCodeToHex=()=>{
    setColorCode('hex');
 }
 const changeColorCodeToRGB=()=>{
    setColor('rgb');
 }
 const getRandomNumber=(range)=>{
      return Math.floor(range*Math.random());
 }
 const getHexCode=()=>{
    const hexNotation=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexCode='#';
    for(let i=1;i<=6;i++){
        hexCode+=hexNotation[(getRandomNumber(hexNotation.length))]
    }
    return hexCode;
 }
 const getRGBCode=()=>{
      let r=getRandomNumber(256);
      let g=getRandomNumber(256);
      let b=getRandomNumber(256);
      return `rgb(${r},${g},${b})`;
 }
 const generateRandomColor=()=>{
    if(colorCode==='hex')
         setColor(getHexCode());
    else
        setColor(getRGBCode());
 }
 return(
    <div style={{backgroundColor:color,width:'100vw',height:'100vh'}}>
        <button onClick={changeColorCodeToHex}>HEX</button>
        <button onClick={changeColorCodeToRGB}>RGB</button>
        <button onClick={generateRandomColor}>Change Color</button>
        <h2 style={{marginTop:'200px'}}>ColorCode:{colorCode} Color:{color}</h2>
    </div>
 )

}

export default GenerateRandomColor;