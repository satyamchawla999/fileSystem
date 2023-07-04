import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import "../Assets/Styles/signUp.scss";

const SignUp = () => {

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        if (name === "" && email === "" && password === "") {
            alert("Please Enter All Credentials!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/addUser", {name:name, email: email, password: password });

            if (response.status === 200)
                Navigate("/");
            else
                alert("User Is Already Present");

            e.target.email.value = "";
            e.target.password.value = "";
            e.target.name.value = "";

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='signUp'>
            <div className='container'>
                <div className='leftContainer'>
                    <div className='formSection'>

                        <h1>Sign Up</h1>

                        <button className='authButton' >
                            <img src={require("../Assets/Images/google.png")} alt="" />
                            Sign Up With Google
                        </button>

                        <p>OR SIGNUP WITH EMAIL</p>

                        <form onSubmit={handleSubmit}>

                            <label>name</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                            />

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
                            <button>Sign Up</button>
                        </form>

                        <p className='p'>Already have an account <Link className='Link' to="/"><span>Sign In?</span></Link></p>
                    </div>
                </div>

                <div className='rightContainer'>
                    <img src={require("../Assets/Images/man.png")} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SignUp