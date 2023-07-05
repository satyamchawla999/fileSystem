import React from 'react';
import {  useDispatch } from 'react-redux'
import {setUserData} from "../Features/User/userSlice"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../Assets/Styles/signIn.scss";

const SignIn = () => {

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios.get("http://localhost:8000/",  { crossdomain: true }).then(response => {
    //   console.log(response);
    // });

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" && password === "") {
      alert("Please Enter All Credentials!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/users/sign-in", { email: email, password: password });

      if (response.status === 201) {
        Navigate("/home");
      }
        
      else
        alert("User Not Found");

      e.target.email.value = "";
      e.target.password.value = "";

    } catch (err) {
      console.log(err);
    }

  }
  
  return (
    <div className='signIn'>
      <div className='container'>
        <div className='leftContainer'>
          <div className='formSection'>

            <h1>Sign In</h1>

            <button className='authButton' >
              <img src={require("../Assets/Images/google.png")} alt="" />
              Log In With Google
            </button>

            <p>OR LOGIN WITH EMAIL</p>

            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
              />

              <label>Password</label>
              <input
                style={{ marginBottom: "0px" }}
                type='password'
                name='password'
                placeholder='Password'
              />

              <p>Forgot Password?</p>
              <button>Sign In</button>
            </form>

            <p className='p'>Don't have an account <Link className='Link' to="/signup"><span>Sign Up?</span></Link></p>
          </div>
        </div>

        <div className='rightContainer'>
          <img src={require("../Assets/Images/man.png")} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignIn