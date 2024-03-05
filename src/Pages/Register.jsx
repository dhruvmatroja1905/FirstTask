import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import login from '../assets/login.png';
import user from '../assets/user.png';
import Navbar from '../component/Navbar';


const Register = () => {



  const initialvalue = { Firstname: '', Lastname: '', Username: '', Password: '', Email: '' };
  const [formvalues, setFormvalues] = useState(initialvalue);
  const [errors, setErrors] = useState({});

  const getdata = (e) => {
    const { value, name } = e.target;
    setFormvalues(prevState => ({ ...prevState, [name]: value }));
  };

  const addData = async (e) => {
    e.preventDefault();
    const { Firstname, Lastname, Username, Password, Email } = formvalues;
    const newErrors = {};

   

  


    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (Firstname === "") {
      newErrors.Firstname = "Firstname field is required";
    }
    if (Lastname === "") {
      newErrors.Lastname = "Lastname field is required";
    }
    if (Email === "") {
      newErrors.Email = "E-mail field is required";
    } else if (!regex.test(Email)) {
      newErrors.Email = "This is not a valid email format!";
    }
    if (Username === "") {
      newErrors.Username = "Username field is required";
    } else if (Username.length < 8) {
      newErrors.Username = "Username Should Be more than 8 characters";
    }
    
    if (Password === "") {
      newErrors.Password = "Password field is required";
    } else if (Password.length <6) {
      newErrors.Password = "Password must have more then 8 character";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("data added successfully");
      console.log(formvalues);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <Navbar />
            <div className='login_container d-flex justify-content-between'>
              <div className='login_img'>
                <img src={login} alt='/' />
              </div>
              <div className='login_form'>
                <div className='user'>
                  <img src={user} alt='/' />
                </div>
                <h2> Register</h2>
                <Form>
                  <FormGroup>
                    <input type='text' placeholder='First Name' onChange={getdata} required id='firstname' name='Firstname' />
                    {errors.Firstname && <span className="error text-red-500">{errors.Firstname}</span>}
                  </FormGroup>
                  <FormGroup>
                    <input type='text' placeholder='Last Name' required id='lastname' onChange={getdata} name='Lastname' />
                    {errors.Lastname && <span className="error text-red-500">{errors.Lastname}</span>}
                  </FormGroup>
                  <FormGroup>
                    <input type='text' placeholder='User Name' required id='Username' onChange={getdata} name='Username' />
                    {errors.Username && <span className="error text-red-500">{errors.Username}</span>}
                  </FormGroup>
                  
                  <FormGroup>
                    <input type='text' placeholder='E-mail' required id='email' onChange={getdata} name='Email' />
                    {errors.Email && <span className="error text-red-500">{errors.Email}</span>}
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={getdata} name='Password' />
                    {errors.Password && <span className="error text-red-500">{errors.Password}</span>}
                  </FormGroup>
                  <Button onClick={addData} className='btn secondary_btn auth_btn' type='submit'>Register</Button>
                </Form>
                <p>Already Have An Account?<Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;










{/*const [credentials,setCredentials] = useState({
        email:undefined,
        password:undefined
      });
      
        const handleChange = (e) => {
          setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        };
      
        const handleClick =  e => {
          e.preventDefault();
        };*/}
