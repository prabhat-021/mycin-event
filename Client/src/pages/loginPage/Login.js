import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
	const [email, setEmail] = useState("");
	const [passw, setPassw] = useState("");
	const [dataInput, setDataInput] = useState("");
	const submitThis = async (e) => {
		const info = { email: email, passw: passw };
		setDataInput([info]);
		
			e.preventDefault();
			axios.post("http://192.168.1.3:8000/Event/login",{
			username:email,
			password:passw, 
		   })
				 .then(result=>{
			console.log(result)
		   }) 
				 .catch(err=>{
				  console.log(err)
				 }) 
		  
	}
	return (
		<>
			
			<div className='main-login'>
				<div className='box-login'>

					<h1 className='h1-login'>Login</h1>
					<form action="" onSubmit={submitThis} className='form-login'>
						<div>
							<label htmlFor="email">Email</label>
							<input className='input-login' type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>

						<div>
							<label htmlFor="passw">Password</label>
							<input type="password" className='input-login' name="passw" id="passw" value={passw} onChange={(e) => setPassw(e.target.value)} />
						</div>
						<button className='button-login' type="submit">Login</button>

						<div className='txt'>Don't have an account <Link to='/signup' className='a-login'>Sign up here</Link></div>
					</form>

					{/* <div className='txt'>Don't have an account <a href='#'>Sign up here</a></div> */}

				</div>
			</div>
		</>

	)
}

export default Login
