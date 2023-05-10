import React from 'react'
import './Tag.css'


export default function Tag ({ logement}) {

    return (
        <div className='contentTag'>
        {logement[0].tags.map(tag => (
            <div key={tag[0]} className='tag'>
            <div>
                <p>{tag}</p>
            </div>
        </div>
        ))}
        </div>
    )

    


}