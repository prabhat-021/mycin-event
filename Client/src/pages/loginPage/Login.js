import React, { useState } from 'react';
import './login.css';
import Navbar from "../../components/Navbar/Navbar"

const Login = () => {
	const [email, setEmail] = useState("");
	const [passw, setPassw] = useState("");
	const [dataInput, setDataInput] = useState("");
	const submitThis = () => {
		const info = { email: email, passw: passw };
		setDataInput([info]);
	}
	return (
		<>
			<Navbar />
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
							<input type="text" className='input-login' name="passw" id="passw" value={passw} onChange={(e) => setPassw(e.target.value)} />
						</div>
						<button className='button-login' type="submit">Login</button>

						<div className='txt'>Don't have an account <a href='#' className='a-login'>Sign up here</a></div>
					</form>

					{/* <div className='txt'>Don't have an account <a href='#'>Sign up here</a></div> */}

				</div>
			</div>
		</>

	)
}

export default Login
