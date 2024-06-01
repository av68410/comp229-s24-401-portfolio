/* comp229-s24-401-portfolio Amy von Deschwanden 301119901 2024-06-01*/
import React from "react";
import myLogo from '../assets/mylogo.svg';


export default function Home() {
    return (
        <>
        <h2></h2>
        <h3>Welcome to my portfolio!</h3> 
        <h3>I’m Amy, a Software Engineering Technician student at Centennial College. Through this portfolio, I aim to showcase my journey of learning, growth and passion.</h3>
        <img src={myLogo} alt="avd logo" />
        </>
    )
}