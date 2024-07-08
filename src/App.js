import './App.css';
import React  from  "react";
import MtmHome from './components/MtmNavbar/MtmHome';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/'  element={ <MtmHome/>}   />
        </Routes> 
       </BrowserRouter> 
    </div>
  );
}

export default  App;
