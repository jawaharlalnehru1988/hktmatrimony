import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import './App.css';
import Base from './Modules/Base';
import Audios from './components/Audios/Audios';
import Videos from "./components/Videos/Videos";

function App() {


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
