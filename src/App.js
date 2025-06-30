import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {


  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      Fuck you Solden
    </div>
  );
}

export default App;
