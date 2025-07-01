import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Rush from './pages/Rush';
import Gallery from './pages/Gallery';
import HouseTour from './pages/HouseTour';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='main-content'>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/rush" element={<Rush />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/house-tour" element={<HouseTour />}></Route>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
