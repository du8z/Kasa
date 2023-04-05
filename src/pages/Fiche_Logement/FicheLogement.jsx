import './ficheLogement.css'
import MainLayout from '../../layout/MainLayout'
import Footer from '../../layout/Footer/Footer'
import { useParams } from 'react-router-dom'
import Datas from '../../data/data'
import Tag from '../../components/TagLogement/Tag'
// import Banner from '../../components/Banner/Banner'
import BannerLogement from '../../components/BannerLogement/BannerLogement'
import InformationUser from '../../components/infomationUser/InformationUser'
import Stars from '../../components/Stars/Stars'
import Collapse, { CollapseLocation } from '../../components/Collapse/Collapse'



export default function Logement () {
    let {uid} = useParams()
    const user = Datas.filter(element => element.id === uid )
    console.log(user[0].tags)

    
    return (
        <MainLayout>

        {/* <BannerLogement/> */}
        <InformationUser user={user}/>
        <div className='positionTagAndStars'>
            <Tag user={user}/>
            <Stars user={user}/>
        </div>
        <div className='CollapsePosition'>
            <Collapse titre = {'Description'} description={user[0].description} />
            {/* <Collapse titre = {'Equipement'} description={user[0].equipments}/> */}
            <CollapseLocation titre = {'Equipement'} descriptions={user[0].equipments}/>
        </div>

        <Footer/>
        </MainLayout>

    )
}