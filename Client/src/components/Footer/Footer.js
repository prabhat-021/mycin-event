import React from 'react';
import "./Footer.css";
import image1 from "../../assets/AboutKietImages/kietlogo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";

export default function Footer() {
    return (
        <>
            <section className="footer">
                <hr />
                <section className='footer-tab'>
                    <div className='kiet-link  div-h '>
                        <h1 className="head-1">Kiet-Links</h1>
                        <a href='https://www.kiet.edu/overview' target="_blank">Overview</a>
                        <a href='https://www.kiet.edu/academic-council' target="_blank">Acadmic Leadership</a>
                        <a href='https://www.kiet.edu/course' target="_blank">Courses</a>
                        <a href='https://www.kiet.edu/about-hr' target="_blank">Careers</a>
                        <a href='https://www.kiet.edu/admission-procedure' target="_blank">How to apply</a>
                    </div>
                    <div className='div-h kiet-link'>
                        <h1 className="head-1">Contact Us</h1>
                        <div><FaPhoneAlt />9140554588</div>
                        <div><SiGmail />aayush.kaushik@kiet.edu</div>
                    </div>
                    <div className='kiet-link div-h '>
                        <Link to="/aboutKiet"><img src={image1} alt="footer-image" className="foot-img" /></Link>
                        <Link to="/aboutKiet" className='about-kiet'>About Kiet</Link>
                    </div>
                </section>
                <hr />
                <div className='bottom'>Made With ❤️ by Aryan,Ashwin,Prabhat</div>
            </section>
        </>
    )
}
