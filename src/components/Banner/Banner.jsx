import image from '../../assets/imgBannerHome.png'






export default function Banner () {
    return (
        <div id="bannerHome">
        <div className='divImgBanner'><img src={image} alt="image" className='imgBanner' />
        </div>
        
    </div>
      
    )
}