import './App.css';
import { useState  } from 'react';

//useRef - reach an individual element and check what its value is

function App() {


  //controlled component. Means controlling our form by creating state values for these form elements

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("000000");
  }

  return (
    <form onSubmit={submit}>
      <input value = {title} onChange = {event => setTitle(event.target.value)} type = "text" placeholder = "color title..."/>
      <input value = {color} type = "color" onChange={event=>setColor(event.target.value)}/>
      <button>Add</button>
    </form>
  );
}

export default App;