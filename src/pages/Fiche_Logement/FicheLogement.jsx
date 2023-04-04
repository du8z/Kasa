// import './FicheLogement.css'
import MainLayout from '../../layout/MainLayout'
import Footer from '../../layout/Footer/Footer'
import { useParams } from 'react-router-dom'
import Datas from '../../data/data'
// import Banner from '../../components/Banner/Banner'
import BannerLogement from '../../components/BannerLogement/BannerLogement'


export default function Logement () {
    

    
    return (
        <MainLayout>

        <BannerLogement/>
        <Footer/>
        </MainLayout>

    )
}