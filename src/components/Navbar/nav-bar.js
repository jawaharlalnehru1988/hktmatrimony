import './nav-bar.css';
import myImage from './images/logo.png';


function Navbar() {
    return (
      <div className="header-class">
      <div className='container'>
        <div className='row pt-3 pb-3'>

      <div className='col-lg-2'>
        <div className="logo">
          <a href="javascriptvoid(0);">
             <img src={myImage} alt="marriage" />
           </a>
        </div>
      </div>
      <div className='col-lg-10 mt-2'>
        <div className="nav-wrap">

      <ul className="navbar-links" >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><button className="link-button" onClick={() => alert('Logo clicked!')}>login</button></li>
        <li><button className="link-button" onClick={() => alert('Logo clicked!')}>Register Now</button></li>
      </ul>
      </div>
      </div>
        </div>
      
      </div>
      </div>
      
        )
    }

    export default Navbar;