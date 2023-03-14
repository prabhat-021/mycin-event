import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import image1 from "../../assets/AboutKietImages/1.jpg";
import image2 from "../../assets/AboutKietImages/2.jpg";
import image3 from "../../assets/AboutKietImages/3.jpg";
import "./AboutKiet.css";

export default function AboutKiet() {
  return (
    <>
      <section className="main">
        <h1 className="about">
          <span className="land-head-span"> About </span> Us
        </h1>
        <div className="moc">
          <div className="flex">
            <div className="font">
              <div className="heading">
                
                KIET GROUP OF <br /> INSTITUTIONS
              </div>
              <br /> Delhi-NCR, Ghaziabad-Meerut Road
              <br /> Ghaziabad-201206
              <br /> Email: director@kiet.edu
              <br /> jointdirector@kiet.edu
              <br /> registrar@kiet.edu
              <br /> Telephone: 01232-227980
              <br /> Mobile: +91-8588811998
              <br /> Toll Free No: 1800-1200-106
            </div>
            <div className="scnd">
              <img className="img" src={image1} width="" alt="" />
            </div>
          </div>
          <div className="land-head-span heading-1">OVERVIEW</div>
          <br />
          <p className="abt-cont">
            Industry Connect is one of the three core principles of KIET Group
            of Institutions. The other two being{" "}
            <span className="bold">value driven and skill oriented.</span> KIET
            has developed a distinctive multi-level mechanism of its own to
            promote a unifying interface with industry. The{" "}
            <span className="bold">
              {" "}
              Corporate Relations and Placement Centre{" "}
            </span>{" "}
            is equipped to create a pool of skilled human resource by guiding
            the students to reach their goals with perfection; towards this CRPC
            has also initiated the Internship & Industry Partnership Cell (IIPC)
            which follows the guidelines laid down under the Internship Policy
            of AICTE. The objective of IIPC is to structure and institutionalize
            Internship which is the most important aspect of Engineering,
            Management, Pharma Education in the country as it provides the
            pre-requisite hands-on practical experience of the workplace to the
            students. CRPC is piloted by a dedicated team. The department has
            successfully placed the students in reputed National &
            Multi-National Companies like TCS, Capgemini, Wipro, NTT Data, IBM,
            Samsung India Electronics, HUL, ION Trading, HSBC, ZS Associates,
            Kronos, Pernod Ricard, Sanmar, Atkins, Torrent Power and many more.
            The zeal and enthusiasm exhibited by premier companies for getting
            zero day slot, speaks for itself regarding the excellent quality of
            professionals churned out by the institute.
          </p>
          <br />
          <br />
        </div>

        <div className="flex-box">
          <div className="part">
            <div className="land-head-span vision">VISION</div>
            <br />
            <p className="abt-cont">
              The vision of Corporate Relations and Placement Centre is to help
              students clarify their educational & career goals as well as
              acquire employment-seeking skills & ultimately attain desired
              employment.
            </p>
          </div>
          <br />
          <br />
          <div className="part">
            <div className="land-head-span vision">MISSION</div>
            <br />
            <ul className="abt-cont">
              <li>Assist students develop/clarify their career interests</li>
              <br />
              <li>Empower students with life-long career decision-making</li>
              <br />
              <li>
                Provide resources and activities to facilitate the Career
                Planning Process
              </li>
              <br />
              <li>Act as a link between Students, Alumni and Corporate</li>
              <br />
              <li>
                Conduct Skill Enhancement Programs in collaboration with the
                industry and the H&S Department
              </li>
              <br />
              <li>
                Assist students in obtaining final placement in reputed
                companies
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div className="img-2">
          <img className="img-3" src={image2} alt="" />
          <br />
          <img className="img-3" src={image3} alt="" />
        </div>
      </section>
    </>
  );
}
