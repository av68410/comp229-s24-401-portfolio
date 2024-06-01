/* comp229-s24-401-portfolio Amy von Deschwanden 301119901 2024-06-01*/
import React from "react";
import profileImage from '../assets/profile.jpg';
import myResume from '../assets/myResume.pdf';

export default function About() {
    return (
        <>
            <h2>About Page</h2>
            <img src={profileImage} alt="Profile Picture" style={{ width: '200px', height: 'auto' }}/>
            <p>Hi! I'm Amy von Deschwanden, currently a Software Engineering Technician student at Centennial College. I have a passion for coding and technology and love to constantly learn new things. In my free time, I enjoy listening to podcasts, reading, snowboarding, and dirt biking.</p>
            {/* Need to udpate my resume */}
            <a href={myResume} target="_blank">Resume</a>        
        </>
        )
}