










import React, {  useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../Style/Login.css'
import login from '../assets/login.png'
import user from '../assets/user.png'



const Login = () => {

  const navigate = useNavigate();

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
    .then(res => res.json())


    .then(data => {
      // Store the API data in local storage
      localStorage.setItem('user-info', JSON.stringify(data));
      localStorage.setItem('token', JSON.stringify(data.token))

      console.log('API data stored in local storage:', data);

    })

    .catch(error => {
      console.error('Error fetching API:', error);
    });

  fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwODUwMDUxMywiZXhwIjoxNzA4NTA0MTEzfQ.eIzo-1bN6ZmJO7B17718QF-iPu3JmmVukmGqHNL845I',
    },
  })
    .then(res => res.json())
    .then(console.log);










  const initialvalue = { Password: '', Username: '' };
  const [formvalues, setFormvalues] = useState(initialvalue);
  const [errors, setErrors] = useState({});

  const getdata = (e) => {
    const { value, name } = e.target;
    setFormvalues(prevState => ({ ...prevState, [name]: value }));





  };





  const addData = (e) => {
    e.preventDefault();
    const { Password, Username } = formvalues;



    const storedUserInfo = JSON.parse(localStorage.getItem('user-info'));
    if (!storedUserInfo) {
      console.error('User not logged in.');
      return;
    }

    const { username: storedUsername, password: storedPassword } = storedUserInfo;

    const newErrors = {};

    if (Username !== storedUsername) {
      newErrors.Username = "Invalid username";
    }



    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Login successful");
      // Redirect to the home page here, for example:
      navigate('/home') // Assuming you have access to the history object
    }


  };


  return (

    <div>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>

              <div className='login_container d-flex justify-content-between'>
                <div className='login_img'>
                  <img src={login} alt='/' />
                </div>

                <div className='login_form'>
                  <div className='user'>
                    <img src={user} alt='/' />
                  </div>
                  <h2>  Login</h2>

                  <Form onSubmit={addData}>
                    <FormGroup>
                      <input type='text' placeholder='Username' required id='username' onChange={getdata} name='Username' />
                      {errors.Email && <span className="error text-red-500">{errors.Email}</span>}
                    </FormGroup>
                    <FormGroup>
                      <input type='password' placeholder='Password' required id='password' onChange={getdata} name='Password' />
                      {errors.Password && <span className="error text-red-500">{errors.Password}</span>}
                    </FormGroup>
                    <Button to='/login' onClick={addData} className='btn secondary_btn auth_btn' type='submit' >Login</Button>
                  </Form>
                  <p>Don't Have An Account?<Link to='/register' >Register</Link></p>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Login
