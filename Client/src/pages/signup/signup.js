import React, { useState, setState } from 'react';
import './signup.css'
import Navbar from "../../components/Navbar/Navbar"
import axios from 'axios';
import { useEffect } from "react";  
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [username, setusername] = useState(null)
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
        if (id === "username") {
            setusername(value);
        }

    }

    const handleSubmit = async (e) => {
        console.log(firstName, lastName, email, password, confirmPassword);
        
            e.preventDefault();
            axios.post("http://192.168.1.3:8000/Event/registration",{
             first_name :firstName ,  
             last_name : lastName,
            email : email,
            username : username,
            password : password,  
            c_password:confirmPassword,
           })
           .then(function (response) {
            console.log(response);
            if (response.status == 200) {
             alert("Registration succesfull");
              navigate("/login");
            }
          })
           .catch(error => {
            console.log(error);
            if (error.response.status == 403) {
                Swal.fire({
                    icon: "error",
                    title: error.response.data.error,
                  });
            }
            if (error.response.status == 500) {
                Swal.fire({
                    icon: "error",
                    title: "Internal Error",
                  });
            }
          });
      
     
         setFirstName("");
         setLastName("");
         setEmail("");
         setPassword("");
         setConfirmPassword("");
         setusername("");        
          
    }

    return (
        <>
            
            <div className='main-signup'>
                <div className='box-signup'>
                    <h1 className='h1-signup'>Signup</h1>
                    <form method='post' className='form-signup'>
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />


                        <label className="form__label" for="lastName">Last Name </label>
                        <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />


                        <label className="form__label" for="username">Username </label>
                        <input type="text" id="username" className="form__input" value={username} onChange={(e) => handleInputChange(e)} placeholder="Library Id" />

                        <label className="form__label" for="email">Email</label>
                        <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />


                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />


                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />

                        <button onClick={ handleSubmit} type="submit" className='button-signup'>Signup</button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default SignupForm