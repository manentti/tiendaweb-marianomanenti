import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Counter from './Counter/Counter';
import ItemListContainer from './Counter/ItemListContainer/ItemListContainer.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Counter/>
        <ItemListContainer greeting="HOLA CODER"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
