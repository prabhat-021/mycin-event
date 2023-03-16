import React, { useState } from "react";
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
    <div className="main">

    <div className="box">
      <h1>Team Registration Form</h1>

      <form onSubmit={handleSubmit} className='form'>
        <label>
          Team Name:
          <input type="text" value={teamName} onChange={handleTeamNameChange} className='input' />
        </label>
        <br />
        <label>
          Leader Name:
          <input type="text" value={leaderName} onChange={handleLeaderNameChange} />
        </label>
        <br />
        <label>
          College Name:
          <input type="text" value={collegeName} onChange={handleCollegeNameChange} />
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
                type="text"
                value={member.name}
                onChange={(event) => handleMemberDetailsChange(index, "name", event.target.value)}
              />
            </label>
            <br />
            <label>
              Year:
              <input
                type="text"
                value={member.year}
                onChange={(event) => handleMemberDetailsChange(index, "year", event.target.value)}
              />
            </label>
            <br />
            <label>
              Branch:
              <input
                type="text"
                value={member.branch}
                onChange={(event) => handleMemberDetailsChange(index, "branch", event.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                value={member.email}
                onChange={(event) => handleMemberDetailsChange(index, "email", event.target.value)}
              />
            </label>
            <br />
            <label>
              PhoneNo:
              <input
                type="text"
                value={member.phoneNo}
                onChange={(event) => handleMemberDetailsChange(index, "phoneNo", event.target.value)}
               />
            </label>
              <br />
            <label>
              T-shirt size:
                    <input
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
     );
  }
  
  export default Form;