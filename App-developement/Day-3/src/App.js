 import logo from './logo.svg';
import './App.css';
import Login from './Assets/Login';
import Signup from './Assets/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route path="/" element ={<Login/>}></Route>
    <Route path="/register" element ={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
