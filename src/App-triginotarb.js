import './App.css';

function Header(props) {
  return(
    <header>
      <h1>{props.name}'s restaurant</h1>
    </header>
  );
}

function Main(props) {
  return(
    <section>
      <img height = {200} src='https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'>
      </img>
      <ul>
        { props.dishes.map((dish) => (
         <li key = {dish.id}>
            {dish.title}
        </li>))}
      </ul>
    </section>
  );
}

function Footer(props){
  return (
  <footer>
    Copyright {props.year}
  </footer>
  );
}

const dishes = [
  "Black Bean Soup", 
  "Macaroni and cheese",
  "Salmon and Potatoes"
];

const dishObjects = dishes.map(
  (dish, i) => ({
    id: i, 
    title: dish})
    );

function App() {
  return (
    <div className="App">
        <Header name = "Trigonotarb"/>
        <Main adjective = "Funtastic" dishes = { dishObjects }/>
        <Footer year = { new Date().getFullYear() } />
    </div>
  );
}

export default App;