import './login.css';
// import myImage from '../login-pages/image/banner.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function login() {
    return (



      <div className="login_section">
      <div className='container' >
        <div className='row'>
        
      <div className='col-lg-6 col-12 mt-3 pb-3 login_image' >
       {/* <img src={myImage} alt="marriage" /> */}
       <div className="signup_wrap mt-3">
    <form>
        <h3>Register Now</h3>
        <div className="mb-3  mt-4 ">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid" >
          <button type="submit" className="signup">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>

      
     </div>
     <div className='col-lg-6 col-12 mt-3 pb-3 login-section' >
      <div className="login-wrapper">
        <h3> Log In </h3>
        <Form>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  className='signup' type="submit">
        Submit
      </Button>
    </Form>
      </div>
      
     </div>
    
        </div>
      
      </div>
      </div>
      
        )
    }

    export default login;

