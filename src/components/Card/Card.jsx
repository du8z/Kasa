import './Card.css'
import Datas from '../../data/data'
import { useNavigate } from 'react-router-dom'





export default function Card (){
    let navigate = useNavigate()

    const user = (userId) => {
        navigate('./user/'+ userId)
    }
    return (
        <div className='cardsSection'>
            
             {Datas.map(data => (
            <div className='card' >
            <img className='imageCard' src={data.cover} alt={data.cover} onClick={() => user(data.id)}/>
            <p className='titleCard'>{data.title}</p>
            </div>
            ))}

        </div>
    )
}

