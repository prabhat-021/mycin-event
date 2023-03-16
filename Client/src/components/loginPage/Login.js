import React,{useState} from 'react';
import './login.css';
// import RegistrationForm from "./registration"; 
const Login=()=>{ 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
	<div className='main'>
    <div className='box'>
   
        <h1>Login</h1>
		<form action="" onSubmit={submitThis} className='form'> 
			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
            
			<div> 
				<label htmlFor="passw">Password</label>
			<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div>  
			<button className='button' type="submit">Login</button>
            
            <div className='txt'>Don't have an account <a href='#'>Sign up here</a></div>
		</form>

        {/* <div className='txt'>Don't have an account <a href='#'>Sign up here</a></div> */}
             
    </div>
	</div>
)} 

export default Login    
 