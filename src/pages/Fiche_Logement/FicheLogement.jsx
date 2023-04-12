import './ficheLogement.css'
import MainLayout from '../../layout/MainLayout'
import Footer from '../../layout/Footer/Footer'
import { useParams } from 'react-router-dom'
import Datas from '../../data/data'
import Tag from '../../components/TagLogement/Tag'
import InformationUser from '../../components/infomationUser/InformationUser'
import Stars from '../../components/Stars/Stars'
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'



export default function Logement () {
    let {uid} = useParams()
    const logement = Datas.filter(element => element.id === uid )
    
    return (
        <MainLayout>
        <Carousel logement={logement}/>
        <InformationUser logement={logement}/>
        <div className='positionTagAndStars'>
            <Tag logement={logement}/>
            <Stars logement={logement}/>
        </div>
        <div className='CollapsePosition'>
            <Collapse id="Test" titre = {'Description'} description={logement[0].description} />
            {/* <Collapse titre = {'Equipement'} description={logement[0].equipments}/> */}
            <Collapse titre = {'Equipement'}  ul={logement[0].equipments} />
        </div>

        <Footer/>
        </MainLayout>

    )
}