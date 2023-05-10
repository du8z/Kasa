import './Card.css'
import Datas from '../../data/data'
import { useNavigate } from 'react-router-dom'





export default function Card (){





    let navigate = useNavigate()

    const logement = (logementId) => {
        navigate('./logement/'+ logementId)
    }
    return (
        <div className='cardsSection'>
            <div className='cards'>
             {Datas.map(data => (
            
            <div key={data.id} className='card' onClick={() => logement(data.id)}>
            <img  className='imageCard' src={data.cover} alt={data.cover} />

            <p className='titleCard'>{data.title}</p>
            </div>
            ))}
            </div>

        </div>
    )
}

