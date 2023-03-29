import { NavLink } from "react-router-dom";

export default function Error () {
    return (

        <div className="Divs404">
                <p className="p404">404</p>
                <p className="pOups">Oups! La page que vous demandez n'existe pas.</p>
                <p className="pAccueil activeLink"><NavLink to ='/'>Retourner sur la page d'acceuil</NavLink> </p>
        </div>
    )
}