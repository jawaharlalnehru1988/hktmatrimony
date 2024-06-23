import './App.css';
import React  from  "react";
import NavBar from './components/Navbar/nav-bar';
import HomePage from './pages/Home';
import Slider from './components/slider/slider-sec';



function App() {
  return (
    <div className="App">
      <NavBar/>
       <HomePage />
       <Slider />
    </div>
  );
}

export default  App;
