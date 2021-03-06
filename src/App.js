import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/About' element= {<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
