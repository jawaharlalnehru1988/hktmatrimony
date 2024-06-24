import { useEffect } from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Sidebar from './components/Navbar/side-bar';
import Base from './Modules/Base';
import Audios from './components/Audios/Audios';
import Videos from "./components/Videos/Videos";

function App() {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
      console.log('response :', response);

      })
      .catch(error => {
     
      });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Videos />} />
          <Route path="audios" element={<Audios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
