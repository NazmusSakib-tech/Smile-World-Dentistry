import React from 'react';
import "./Footer.css"



const Footer = () => {
    return (
        <div className="footer">
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="border-right">
                            <li>Home</li>
                            <li>Treatments</li>
                            <li>Contact</li>
                            <li>About us</li>
                        </ul>
                    </div>

                    <div className="col-md-3">

                        <ul className="border-right">
                            <li>General Dentistry</li>
                            <li>Dental Exam & Cleaning</li>
                            <li>Teeth Whitening</li>
                            <li>Root Canal</li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="border-right">
                            <li>FaceBook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>

                        </ul>
                    </div>
                </div>

            </div>
            <p className="mb-0">Copyright © 2020 - 2021  SMILE WORLD DENTISTRY. All rights reserved.</p>
        </div>
    );
};

export default Footer;