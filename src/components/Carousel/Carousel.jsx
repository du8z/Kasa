import './Carousel.css'
import ImageSlider from '../ImageSLider/ImageSlider'



export default function Carousel ({logement}) {
    const pictures = logement[0].pictures
    const slides = pictures
 
    if (pictures.length < 2) {
        return (
        <div id='Carousel'>
        <div className='ContainerCarousel'>
            <div className='imgCarousel'>
            <img src={pictures[0]} alt="" srcset="" />
            </div>

        </div>
    </div>
    )
    } else {
        return (
            <div id='Carousel'>
                <div className='ContainerCarousel'>
                    <div className='imgCarousel'>
                    <ImageSlider slides={slides} />
                    </div>
    
                </div>
            </div>
        )
    }



}


