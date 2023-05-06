import { NavLink } from "react-router-dom";
import './404.css'
import { useRouteError } from "react-router-dom";
import NavBar from '../../components/Menu/NavBar'
export default function Error () {

    const error = useRouteError() 
    console.error(error)

    return (
        <>
        <NavBar/>
        <div className="Divs404">
                <p className="p404">404</p>
                <p className="pOups">Oups! La page que <span className="span404">vous demandez n'existe pas.</span> </p>
                <p className="pAccueil activeLink"><NavLink to ='/'>Retourner sur la page d'acceuil</NavLink> </p>
        </div>
        </>

    )
}