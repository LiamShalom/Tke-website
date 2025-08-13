import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import RushBanner from './Components/RushBanner';

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
            {routes.map(( { path, element }, idx) => (
              <Route key={idx} path={path} element={element}/>
            ))}
          </Routes>
        </div>
        <div className="footer">
          <RushBanner></RushBanner>
        </div>
      </div>
    </LoadScript>
  );
}

export default App;
