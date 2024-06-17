import './App.css';
import Navbar from './components/Navbar/nav-bar';
import HomePage from './pages/Home';
import Loginpage from './login-pages/login'


function App() {
  return (
    <div className="App">
       <Navbar />
       <HomePage />
       <Loginpage />
      
    </div>
  );
}

export default App;
