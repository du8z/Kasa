import { useParams } from 'react-router-dom'
import Datas from '../../data/data'
import './BannerLogement.css'
import { useState } from 'react'


export default function BannerLogement () {
    

    
    let {uid} = useParams()
    const user = Datas.filter(element => element.id === uid )
    console.log(user[0].pictures);
    const pictures = user[0].pictures
    const test = user[0].pictures[2]
    const index = pictures.findIndex(picture => picture === test)
    console.log(pictures);
    console.log(pictures.length);
    console.log(index + 1);
    // console.log(pictures.findIndex())
    return (
        <div>
          {Datas.map(slide => (
            <div key={slide.id}>
             <img src={slide.pictures} alt="" />
            </div>
          ))}
        </div>
    )
}



// {user[0].pictures.map(picture => (
//     <div>
//     <img className='imageCard' src={picture} alt={picture} />
//     {/* <p>`${currentIndex + 1}/${pictures.length}`</p> */}
//     </div>
// ))}