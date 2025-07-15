import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Rush from './pages/Rush';
import Gallery from './pages/Gallery';
import HouseTour from './pages/HouseTour';

function App() {
  const topOfPageRef = useRef(null);

  const scrollToTop = () => {
    topOfPageRef.current?.scrollIntoView();
  }

  return (
    <LoadScript 
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
    >
      <div className="App">
        <Header refFunc={scrollToTop}></Header>
        <div className='main-content' ref={topOfPageRef}>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/rush" element={<Rush />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/see-our-house" element={<HouseTour />}></Route>
        </Routes>
        </div>
        
      </div>
    </LoadScript>
  );
}

export default App;
