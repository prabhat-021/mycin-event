import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import axios from 'axios';
import imageProfile from "../../assets/Navbar/profile.jpg";
import imageLogout from "../../assets/Navbar/logout.png";
import imageEmail from "../../assets/Navbar/email.png";
import imageTeam from "../../assets/Navbar/Team.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [icons, setIcon] = React.useState(false);
  function toggleMenuProfile(e){
    setToggle(!toggle);
    }

  //     const [user ,setUser] = useState({})
  //     const handlCallbackResponse = async (response) => {
  //       console.log("Encoded JWT ID token :" + response.credential);
  //       var userObject = jwt_decode(response.credential);
  //       console.log(userObject);
  //       const name = userObject.name;
  //       const email = userObject.email;
  //       setUser(userObject)
  //       console.log(name,email);

  //       await axios.post("http://localhost:8000/api/register",{name,email});

  //       // await fetch("http://localhost:8000/api/register",{
  //       //   method:"post",
  //       //   body: name
  //       // }).then(()=>{
  //       //   (response) => response.json()

  //       // console.log("created successful")
  //       // }).catch((err)=>{
  //       //   console.log(err);
  //       // })
  //       document.getElementById("signInDiv").hidden = true;
  //     };
  //   function handleSignOut (event){
  // setUser({});
  // document.getElementById("signInDiv").hidden = false;
  //   }

  //     useEffect(() => {
  //       google.accounts.id.initialize({
  //         client_id:
  //           "202344661656-6ru3hfl7tlmmc4eeh87vjk5ltjmhccma.apps.googleusercontent.com",
  //         callback: handlCallbackResponse,
  //       });
  //       google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //         theme: "outline",
  //         size: "medium",
  //       });
  //       google.accounts.id.prompt();
  //     }, []);


  return (
    <section className='nav-bg'>
      <div className="navbar">
        <ul className={icons ? "nav-item-mobile" : "nav-item "}
          onClick={() => setIcon(false)}>
          <li className="item ">
            <Link className="item" to="/home">Home </Link>
          </li>
          {/* <li className="item">
            <Link className="item"  to="/about">Residence </Link>
          </li> */}
          <li className="item">
            <Link className="item" to="/events">Events </Link>
          </li>
          <li className="item">
            <Link className="item" to="/timeline">Timeline </Link>
          </li>
          <li className="item">
            <Link className="item" to="/team">Team </Link>
          </li>
          {/* <li className="item">
            <Link className="item" to="/login">Login </Link>
          </li>
          <li className="item">
            <Link className="item" to="/signup">Signup</Link>
          </li> */}
          <li className="item">
            <Link className="item" to="/aboutKiet">About</Link>
          </li>
          {/* <li className="item">
            <Link className="item"  to="/contact">ContactUs</Link>
          </li> */}
          {/* <li className='item' id='signInDiv'></li>
       {Object.keys(user).length != 0 && <li className='item' onClick={(e)=>handleSignOut(e)}>SignOut</li>}    */}

          {/* { user && 
       <div className='det'> <li className='item'> <img className='acc-img' src={user.picture} alt="" /></li>
         <div className='name'>{user.name}</div></div>
          }  */}

          <li>
          
              <img src={imageProfile} className="user-pic" onClick={toggleMenuProfile}/>    
             {toggle ? <div className="sub-menu-wrap" id="subMenu">
                      <div className="sub-menu">
                      <div className="user-info">
                      {/* <img src="images/user.png"/> */}
                      <h2>Tushar Sharma</h2>
                       </div>
                       <hr></hr>
                            <a href="#" className="sub-menu-link">
                                  <img src={imageEmail}/>
                                  <p>Email</p>
                                  <span> &gt;</span>
                            </a>
                            <a href="#" className="sub-menu-link">
                                <img src={imageTeam}/>
                                <p>Team Name</p>
                                <span> &gt;</span>
                            </a>
                            {/* <a href="#" className="sub-menu-link">
                                <img src="images/help.png"/>
                                <p>Help & Support</p>
                                <span> &gt;</span>
                            </a> */}
                                <a href="#" className="sub-menu-link">
                                <img src={imageLogout}/>
                                <p>Logout</p>
                                <span>&gt;</span>
                            </a>
                        </div> 
                    </div> 
                    :
                    <></>
                    }      
          </li>
        </ul>
        <button className="nav-icon"
          onClick={() => setIcon(!icons)}>
          {icons ? <CloseIcon /> : <MenuIcon className='icon'  />}
        </button>
      </div>
    </section>
  )
}
export default Navbar