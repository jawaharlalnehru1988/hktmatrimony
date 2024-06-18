import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Sidebar from './components/Navbar/side-bar';
import Base from './Modules/Base';



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
          {/* <Sidebar/> */}
      <Base />
    </div>
  );
}

export default App;
