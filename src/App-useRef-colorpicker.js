import './App.css';
import { useRef  } from 'react';

//useRef - reach an individual element and check what its value is

function App() {
  
  const txtTitle = useRef();
  const hexColor = useRef();

//useRef created an uncontrolled component 

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }

  return (
    <form onSubmit={submit}>
      <input ref = { txtTitle } type = "text" placeholder = "color title..."/>
      <input ref = { hexColor } type = "color"/>
      <button>Add</button>
    </form>
  );
}

export default App;