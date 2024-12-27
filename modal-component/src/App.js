import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  return (
    <div className="App" onClick={(e)=>{
       if(e.target===e.currentTarget){
        setShowModal(false);
       }
    }}>
      {isOfferAccepted ? (
        <p>offer accepted</p>
      ) : showModal ? (
        <div id="modal" className="modal">
          <button onClick={(_)=>{
            setShowModal(false);
          }}>X</button>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <button
            onClick={(_) => {
              setShowModal(false);
              setIsOfferAccepted(true);
            }}
          >
            Accept
          </button>
        </div>
      ) : (
        <button
          onClick={(_) => {
            setShowModal(true);
          }}
        >
          Click Me
        </button>
      )}
    </div>
  );
}

export default App;
