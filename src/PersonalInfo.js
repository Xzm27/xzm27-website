import React from 'react';
import "./PersonalInfo.css"

// first last age nationality languages ---- location phone email languages freelance

function PersonalInfo() {
    return (
        <div className="personalInfo">
            <h2>
                Personal Infos
            </h2>
            <div className="row">
                <div className="col">
                    <p>First Name: <span>Sayan</span></p>
                    <p>Last Name: <span>Sah</span></p>
                    <p>Age: <span>19</span></p>
                    <p>Nationality: <span>Indian</span></p>
                    <p>Languages: <span>English, Hindi, Bengali</span></p>
                </div>
                <div className="col">
                    <p>Location: <span>Islampur</span></p>
                    <p>Phone: <span>+91-89273-09046</span></p>
                    <p>Email: <span>sayan.sah2002@gmail.com</span></p>
                    <p>LinkedIn: <span>Sayan Sah</span></p>
                    <p>Freelance: <span>Available</span></p>
                </div>
            </div>
            
        </div>
    )
}

export default PersonalInfo
