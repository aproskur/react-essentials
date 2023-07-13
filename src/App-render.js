import './App.css';
import { useState, useEffect  } from 'react';

const game_friends = [
  {
    name: "Trigonotarb",
    size : 5 
  },
  {
    name: "Onorognat",
    size: 10
  },
  {
    name: "Schip",
    size: 15
  },
  {
    name: "Astronotarb",
    size: 172
  }
];


function List({data, renderItem, renderEmpty}){
  return !data.length ? renderEmpty : <ul>{data.map((item)=> <li key={item.name}>{renderItem(item)}</li>)}</ul>}
function App() {

    return (
      <List data = {game_friends} renderEmpty={<p>This list is empty</p>} renderItem={item => <>{item.name} - {item.size}</>}/>
    );

  
}

export default App;