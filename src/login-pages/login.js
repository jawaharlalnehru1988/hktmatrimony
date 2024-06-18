import './login.css';
import myImage from '../login-pages/image/banner.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Button variant="primary" type="submit">
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