import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import  './form.css'

function Form() {
  
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [memberDetails, setMemberDetails] = useState([{ name: "", year: "", branch: "", email: "", phoneNo: "", tshirtSize: "" }]);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleLeaderNameChange = (event) => {
    setLeaderName(event.target.value);
  };

  const handleCollegeNameChange = (event) => {
    setCollegeName(event.target.value);
  };

  const handleMemberDetailsChange = (index, key, value) => {
    const updatedMemberDetails = [...memberDetails];
    updatedMemberDetails[index][key] = value;
    setMemberDetails(updatedMemberDetails);
  };

  const handleAddMember = () => {
    const updatedMemberDetails = [...memberDetails, { name: "", year: "", branch: "", email: "", phoneNo: "", tshirtSize: "" }];
    setMemberDetails(updatedMemberDetails);
  };

  const handleRemoveMember = (index) => {
    const updatedMemberDetails = [...memberDetails];
    updatedMemberDetails.splice(index, 1);
    setMemberDetails(updatedMemberDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      teamName,
      leaderName,
      collegeName,
      memberDetails,
    });
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
        <label>Member Details:</label>
        <br />
        <button type="button" onClick={handleAddMember} className='button-form'>
          Add Member
        </button>
        {/* <hr style="color:white"></hr> */}
        <div className="xy">
        {memberDetails.map((member, index) => (
          <div key={index}>
            <label>
              Name:
              <input
                 className='inputteamname'
                type="text"
                value={member.name}
                onChange={(event) => handleMemberDetailsChange(index, "name", event.target.value)}
              />
            </label>
            <br />
            <label>
              Year:
              <input
                 className='inputteamname'
                type="text"
                value={member.year}
                onChange={(event) => handleMemberDetailsChange(index, "year", event.target.value)}
              />
            </label>
            <br />
            <label>
              Branch:
              <input
                 className='inputteamname'
                type="text"
                value={member.branch}
                onChange={(event) => handleMemberDetailsChange(index, "branch", event.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
               className='inputteamname'
                type="text"
                value={member.email}
                onChange={(event) => handleMemberDetailsChange(index, "email", event.target.value)}
              />
            </label>
            <br />
            <label>
              PhoneNo:
              <input
                className='inputteamname'
                type="text"
                value={member.phoneNo}
                onChange={(event) => handleMemberDetailsChange(index, "phoneNo", event.target.value)}
               />
            </label>
              <br />
            <label>
              T-shirt size:
                    <input
                       className='inputteamname'
                      type="text"
                      value={member.tshirtSize}
                      onChange={(event) => handleMemberDetailsChange(index, "tshirtSize", event.target.value)}
                      />
            </label>
               <br />
              <button type="button" className="button-remove" onClick={() => handleRemoveMember(index)}>
Remove Member
              </button>
             <br />
        </div>
             ))}
                <br />
            {/* <input type="submit" value="Submit" />
             */}
             <button type="submit" className="button-submit">Submit</button>
             </div>
              </form>

              </div>
                </div>
                </>
     );
  }
  
  export default Form;