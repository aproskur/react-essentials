import './App.css';
import { Link, Outlet } from 'react-router-dom';


function Home() {
  return( 
  <div>
    <nav>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
    <h1>My Website</h1>
  </div>
)}

export function About() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <h1>About us</h1>
      <Outlet />
    </div>
)}

export function Contact() {
  return(
  <div>
    <Link to="/">Home</Link>
    <Link to="/About">Contact</Link>
    <h1>Contact us</h1>
  </div>
)}

export function History() {
  return(
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function App() {

    return (
      <Home />
    );

  
}

export default App;