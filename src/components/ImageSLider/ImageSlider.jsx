import './ImageSlider.css'
import { useState } from 'react';

const ImageSLider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }
    const slideStyles = {
        with: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundSize : 'cover',
        backgroundPosition : 'center' ,
        backgroundImage : `url(${slides[currentIndex]})`
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex)
    }


    return (
        
           
        
        <div style={sliderStyles}>
            
            <div onClick={goToPrevious}><svg className='Left'  viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>
            </div>
            <div onClick={goToNext}><svg className='Right'  viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </svg>
            </div>  
            <div style={slideStyles}></div>
            <div className='indexSlide'>
                    <p>
                    {currentIndex + 1}/{slides.length}
                    </p>
            </div>
        </div>

           
    )
}

export default ImageSLider;