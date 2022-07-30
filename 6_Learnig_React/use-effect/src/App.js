import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';

function App() {
  const [first, setfirst] = useState(0);
  function abc(){
    setfirst(first+1);
  }
  useEffect(() => {
    console.log("render");
  }, [first])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={abc}>click me</button>
        <p>
          {first}
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
