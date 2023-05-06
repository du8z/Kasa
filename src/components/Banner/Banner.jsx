import './Banner.css'

export default function Banner (props) {
    const Url = props.img[0]
    if (props.img[1] !== undefined) {
        return (
            <div id="bannerHome" >
            <div className='pContentBanner'>
                <p className='pBanner'>{props.img[1]}</p>
                <p className='pBanner'>{props.img[2]}</p>
            </div>
            <div className='divImgBanner'>
                <img src={Url} alt={props} className='imgBanner' />
            </div>
            
        </div>
          
        )
    } else {
        return (
            <div id="bannerHome" className={props.name}>
            <div className='divImgBanner'>
                <img src={Url} alt={props} className='imgBanner' />
            
            </div>
            
        </div>
          
        )
    }
    
    
}

