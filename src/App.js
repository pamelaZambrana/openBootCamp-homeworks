import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './tarea-clases-4,5-6/functionalComponent';
import Clock from './newComponent/classComponent';
import Methods from './tarea-clases-10-11-12/methods';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock></Clock> */}
        {/* <FunctionalComponent></FunctionalComponent>  */}
        <Methods></Methods>
      </header>
    </div>
  );
}

export default App;
