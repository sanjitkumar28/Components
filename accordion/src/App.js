import logo from './logo.svg';
import './App.css';
import { accordionData } from './data';
import { useState } from 'react';
function App() {
  const [selectedIndex,setSelectedIndex]=useState(-1);
  const [multipleSelectIndex,setMultipleSelectIndex]=useState([]);
  const [isMulipleSelectEnable,setIsMultipleSelectEnable]=useState(false);
  const handleAccordionClick=(id)=>{
    setSelectedIndex(selectedIndex===id?-1:id);
  }

  const handleMultipleSelect=(id)=>{

    // why spread operator is used
    // why splice directly is not working 
    // why modifiying state does not work 
    const indexs=[...multipleSelectIndex];
     const index= multipleSelectIndex.indexOf(id);
     if(index==-1){
      setMultipleSelectIndex([...multipleSelectIndex,id]);
     }
     else{
      // console.log('splice',index);
      // const newArray= [...multipleSelectIndex];
      // console.log(newArray.splice(index,1));
      // console.log(multipleSelectIndex.splice(index,1));
      indexs.splice(index,1);
      // console.log('duplicateArray',duplicateArray);
      setMultipleSelectIndex([...indexs]);
     }
  }

  const handleClick=()=>{
    setIsMultipleSelectEnable(!isMulipleSelectEnable);
    setSelectedIndex(-1);
    setMultipleSelectIndex([]);
  }


  return (
    <div className="App">
      <div className='container'>
        {
          !isMulipleSelectEnable ?<button onClick={handleClick} className='multiple-select-button'>Enable Multiple Select</button> :<button onClick={handleClick} className='multiple-select-button'>Enable Single Select</button>
        }    
         {
          accordionData.map((accordionInfo)=>(
            <div key={accordionInfo.id} className='accordion-container' onClick={()=>isMulipleSelectEnable ? handleMultipleSelect(accordionInfo.id) :handleAccordionClick(accordionInfo.id)}>
               <div className='title'>
                {accordionInfo.title}
                <button>+</button>
               </div>
               {
                  isMulipleSelectEnable && multipleSelectIndex.indexOf(accordionInfo.id) !== -1 ?<div className='accordion-data'>{accordionInfo.content}</div>:selectedIndex === accordionInfo.id ? <div className='accordion-data'>{accordionInfo.content}</div>:<></>
               } 
            </div>
          ))
         } 
    </div>
    </div>
  );
}

export default App;
