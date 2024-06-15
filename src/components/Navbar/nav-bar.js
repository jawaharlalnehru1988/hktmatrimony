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
      <div className='col-lg-6'>
         

      </div>
      <div className='col-lg-2'>
         <button className="top-space"><a href='#'>Log in</a></button>

      </div>
      <div className='col-lg-2 '>
        <p className="contact-wrapper top-space"><a href='#'>Contact</a></p>
        </div>
        </div>
      
      </div>
      </div>
      
        )
    }

    export default Navbar;