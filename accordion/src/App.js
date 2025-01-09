import logo from './logo.svg';
import './App.css';
import { accordionData } from './data';
import { useState } from 'react';
function App() {
  const [selectedIndex,setSelectedIndex]=useState(-1);
  const handleAccordionClick=(id)=>{
    console.log('handle',id);
    setSelectedIndex(selectedIndex===id?-1:id);
  }
  return (
    <div className="App">
         {
          accordionData.map((accordionInfo)=>(
            <div key={accordionInfo.id} className='accordion-container'>
               <div className='title' onClick={()=>handleAccordionClick(accordionInfo.id)}>
                {accordionInfo.title}
                <button>+</button>
               </div>
               {
                  selectedIndex === accordionInfo.id ? <div className='accordion-data'>{accordionInfo.content}</div>:<></>
               } 
            </div>
          ))
         } 
    </div>
  );
}

export default App;
