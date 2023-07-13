
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const[emotion, setEmotion] = useState("happy");
  const[secondary, setSecondary] = useState("tired");
//second argument - array, is a dependency array. empty array - only first render. if passing value - to listen to any changes in this array
  
useEffect(() => {console.log(`its ${emotion} around here`)}, [emotion]);
useEffect(() => {console.log(`It's ${secondary} around here`)}, [secondary]);

  return (
    <>
      <h1>
        Current emotion is {emotion}
     </h1>
      <button onClick ={()=>setEmotion("excited")}>
        Excited
      </button>
      <button onClick ={()=>setEmotion("sad")}>
        Sad
      </button>
      <h2>
        Secondary emotion is {secondary}
      </h2>
      <button onClick ={()=>setSecondary("grateful")}>
        Grateful
      </button>
    </>
  );
}

export default App;




