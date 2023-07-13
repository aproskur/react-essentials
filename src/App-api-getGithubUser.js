import './App.css';
import { useState, useEffect  } from 'react';



function GithubUser({name, location,avatar}) {
  return (
    <div>
      <h1>{ name }</h1>
      <p>{ location }</p>
      <img height={150} src={avatar} alt={name}></img>
    </div>
  )
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
     fetch(`https://api.github.com/users/aproskur`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);

  if(loading) return <h1>Loading</h1>

  if(error) return <pre>{JSON.stringify(error)}</pre>
  if(!data) return null;
    return (<GithubUser name={data.login} location = {data.url} avatar = {data.avatar_url}/>);

}

export default App;