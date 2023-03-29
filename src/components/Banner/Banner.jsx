

export default function Banner (props) {
    const Url = props.img[0]
    if (props.img[1] !== undefined) {
        return (
            <div id="bannerHome">
            <div className='divImgBanner'><img src={Url} alt={props} className='imgBanner' />
            
            <p className='pBanner'>{props.img[1]}</p>
            </div>
            
        </div>
          
        )
    } else {
        return (
            <div id="bannerHome">
            <div className='divImgBanner'><img src={Url} alt={props} className='imgBanner' />
            
            </div>
            
        </div>
          
        )
    }
    
    
}

