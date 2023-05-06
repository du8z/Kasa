import { NavLink } from "react-router-dom"
import './Menu.css'

export default function Menu() {
    return (
        <div className="menu">
            <div className="svgLogo">
            </div>
            <div className="navList">
            <ul>
                <li><NavLink to='/' className={({isActive}) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li><NavLink to='/aPropos' className={({isActive}) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
            </ul>
            </div>
 
        </div>
    )
}