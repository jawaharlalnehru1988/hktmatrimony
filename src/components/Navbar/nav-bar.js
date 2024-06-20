import './nav-bar.css';

function Navbar() {
    return (
      <div className="header-class">
      <div className='container'>
        <div className='row pt-3 pb-3'>

      <div className='col-lg-2'>
        <div className="logo">
          <a href="javascriptvoid(0);">
            <span>HKT</span>MATRIMONY
           </a>
        </div>
      </div>
      <div className='col-lg-10 mt-4'>
        <div className="nav-wrap">

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><button className="link-button" onClick={() => alert('Logo clicked!')}>log In</button></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </div>
      </div>
        </div>
      
      </div>
      </div>
      
        )
    }

    export default Navbar;