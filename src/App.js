import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Base from './Modules/Base';
import Videos from "./components/Videos/Videos";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />}>
        <Route path="/videos" element={<Videos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
