import { Link } from "react-router"

export const Navbar = ({ link1, link2, link3, link4, 
    option1, option2, option3, option4 }) => {
    
    return <nav className="nav nav-pills flex-column flex-sm-row header__navbar">
        <Link className="flex-sm-fill text-sm-center nav-link text-light " to={link1}>{option1}</Link>
        <Link className="flex-sm-fill text-sm-center nav-link text-light" to={link2}>{option2}</Link>
        <Link className="flex-sm-fill text-sm-center nav-link text-light" to={link3}>{option3}</Link>
        <Link className="flex-sm-fill text-sm-center nav-link text-light" to={link4}>{option4}</Link>
  </nav> 
}