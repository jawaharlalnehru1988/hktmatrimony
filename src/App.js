import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Sidebar from './components/Navbar/side-bar';



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
    <div className="App">
          <Sidebar/>
      
    </div>
  );
}

export default App;
