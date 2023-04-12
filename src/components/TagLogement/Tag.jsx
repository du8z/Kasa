import React from 'react'
import './Tag.css'
import Datas from '../../data/data'
import { useParams } from 'react-router-dom'


export default function Tag ({ logement}) {

    return (
        <div className='contentTag'>
        {logement[0].tags.map(tag => (
            <div className='tag'>
            <div>
                <p>{tag}</p>
            </div>
        </div>
        ))}
        </div>
    )

    


}