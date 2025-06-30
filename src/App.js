import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Exec from './pages/Exec';
import Rush from './pages/Rush';
import Gallery from './pages/Gallery';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='main-content'>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/exec" element={<Exec />}></Route>
        <Route path="/rush" element={<Rush />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
