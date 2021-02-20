import logo from './logo.svg';
import Home from "./pages/Home"
import './App.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Stepper } from '@material-ui/core';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/> 
     
    </div>
  );
}

export default App;
