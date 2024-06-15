import './login.css';
import myImage from '../login-pages/image/banner.jpg';

function login() {
    return (
      <div className="login_section">
      <div className='container' >
        <div className='row'>
        
      <div className='col-lg-6 col-12 mt-3 pb-3 login_image' >
       <img src={myImage} alt="marriage" />
      
     </div>
     <div className='col-lg-6 col-12 mt-3 pb-3 login-section' >
      <div className="login-wrapper">
        <h2> Log In </h2>
        <form action="/login" method="post">
          <div className="login-eamil">
           <lable for>Username or Email </lable>

          </div>
        
        
        
        
        </form>

  

      </div>
      
     </div>
    
        </div>
      
      </div>
      </div>
      
        )
    }

    export default login;