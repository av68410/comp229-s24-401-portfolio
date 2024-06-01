/* comp229-s24-401-portfolio Amy von Deschwanden 301119901 2024-06-01*/
import { Link } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <h1>My Portfolio</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <hr />
        </>
    )
}