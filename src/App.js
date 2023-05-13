import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import RegisterWidget from './Pages/RegisterWidget';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Home />}> {" "}</Route>     
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path='/RegisterWidget' element={<RegisterWidget />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
