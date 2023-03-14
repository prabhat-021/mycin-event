import React from "react";
import "./Landing.css";
import logo from '../../assets/images/logop.png'

import brou from '../../assets/brou.pdf'
const Landing = () => {
  return (

 <div className="land-cont">
  <img src={logo} alt="logo" className="logo" />
      <div className="font-4">INTER-COLLEGIATE ANNUAL FESTIVAL</div>
      <div className="font-3"><span  className="land-head-span"> EP</span>OQUE@<span className="land-head-span">PRAS</span>TUTI   </div>
      <div className="font-4">UN<span className="land-head-span">VEI</span>LING CREATI<span className="land-head-span">VITY</span></div>
      <div className="font-4"> 02nd to 04th MARCH 2023</div>
      <div className="btn-rul"><a href={brou} target ="_blank" download className=" rulebtn"><button className="btn-grad">Brouchure</button></a></div>
    </div>

   
  );
};
export default Landing;
