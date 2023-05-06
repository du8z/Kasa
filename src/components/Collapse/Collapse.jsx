import { useState } from "react";
import './Collapse.css'


export default function Collapse ({titre, description, ul }) {
    const [open, setOpen] = useState(false)

    if (ul === undefined) {
        return (
            <div className="boxCollapse">
            <div className="Collapse" onClick={() => setOpen(!open)}>
                <div className="titleCollapse"><p>{titre}</p></div>
                <div className={`svgCross ${open ? 'crossUp' : 'crossDown'}`} >
                <svg className="svgCollapse" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z" fill="white"/>
                </svg>
    
                </div>
            </div>
    
            <div id="descriptionCollapse" className={`descriptionCollapse ${open ? 'ouverte' : 'fermee'}`}>
                <p>{description}</p>
            </div>
            </div>
        )
    } else if (ul !== undefined) {
        return (
            <div className="boxCollapse">
            <div className="Collapse heightCollapseLogement" onClick={() => setOpen(!open)}>
                <div className="titleCollapse"><p>{titre}</p></div>
                <div className={`svgCross ${open ? 'crossUp' : 'crossDown'}`} >
                <svg className="svgCollapse" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z" fill="white"/>
                </svg>
    
                </div>
            </div>
            <div id="equipmentsCollapse" className={`descriptionCollapse ${open ? 'ouverte' : 'fermee'}`}>
            <ul id="ulEquipments">
                {ul.map(description => (
                    
                    <li key={description.toString()}>{description}</li>
                    
                ))}
            </ul>
            </div>
            </div>
        )
    }


}



