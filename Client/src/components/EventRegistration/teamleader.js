import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import  './form.css';
import { Link } from "react-router-dom";
function LeaderForm() {
  
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [year, setyear] = useState("");
  const [branch, setbranch] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneno] = useState("");
  const [tshirtSize, settshirt] = useState("");
  const [reciept, setreceipt] = useState(null);
  const gettotop=()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
}
  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleLeaderNameChange = (event) => {
    setLeaderName(event.target.value);
  };

  const handleYearChange = (event) => {
    setyear(event.target.value);
  };
  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };
  const handleBranchchange = (event) => {
    setbranch(event.target.value);
  };
  const handlePhonenochange = (event) => {
    setphoneno(event.target.value);
  };
  const handleTshirtSize = (event) => {
    settshirt(event.target.value);
  };
  const handleCollegeNameChange = (event) => {
    setCollegeName(event.target.value);
  };
  

  const handleImageChange = (e) => {
    setreceipt(e.target.files[0]);
  }


  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log({
      teamName,
      leaderName,
      collegeName,
      
      year,
      branch,
      email,
      phoneNo,
      tshirtSize
    });
    event.preventDefault();

    // create a new FormData object and append the selected image file to it
    const formData = new FormData();
    formData.append('image', reciept);

    // make a POST request to the server to upload the image file
    const response = await fetch('http://192.168.1.2:8000/Event/team/registration', {
      method: 'POST',
      body: {Team_Name:teamName,College_Name:collegeName,Leader_Name:leaderName,Leader_Year:year,Leader_Branch:branch,Leader_Email:email,Leader_Phone_no:phoneNo,Leader_Tshit_size:tshirtSize,Payment_receipt:formData}
    });

    // handle the server's response
    // if (response.ok) {
    //   console.log('Image uploaded successfully!');
    // } else {
    //   console.log('Error uploading image.');
    // }

  };

  return (
    <>
    <Navbar></Navbar>
    <div className="mainregistration">

    <div className="boxinside">
      <h1 style={{margin: "23px",
    color: "white"}}>Team Registration Form</h1>

      <form onSubmit={handleSubmit} className='formregis'>
        <label>
          Team Name:
          <input type="text" value={teamName} onChange={handleTeamNameChange} className='inputteamname' />
        </label>
        <br />
        <label>
          Leader Name:
          <input type="text" value={leaderName} onChange={handleLeaderNameChange}  className='inputteamname' />
        </label>
        <br />
        <label>
          College Name:
          <input type="text" value={collegeName} onChange={handleCollegeNameChange}  className='inputteamname'/>
        </label>
        <br />
        <label>
              Leader Year:
              <input
                 className='inputteamname'
                type="text"
                value={year}
                onChange={handleYearChange}
              />
            </label>
            <br />
            <label>
             Leader Branch:
              <input
                 className='inputteamname'
                type="text"
                value={branch}
                onChange={handleBranchchange}
              />
            </label>
            <br />
            <label>
             Leader Email:
              <input
               className='inputteamname'
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <br />
            <label>
              Leader PhoneNo:
              <input
                className='inputteamname'
                type="text"
                value={phoneNo}
                onChange={handlePhonenochange}
               />
            </label>
              <br />
            <label>
              Leader T-shirt size:
                    <input
                       className='inputteamname'
                      type="text"
                      value={tshirtSize}
                      onChange={handleTshirtSize}
                      />
            </label>
            <label htmlFor="image-input">Image:
            <input className='inputteamname' type="file" id="image-input" accept="image/*"  onChange={handleImageChange}/>
            </label>
        
             <button type="submit" className="button-submit">Submit</button>
             <div className='txt'>Already Filled ? <Link to='/registration' className='a-login' onClick={gettotop} > click on Fill member's details here</Link></div>
              </form>

              </div>
                </div>
                </>
     );
  }
  
  export default LeaderForm;