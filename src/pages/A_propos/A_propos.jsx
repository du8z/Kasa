import MainLayout from "../../layout/MainLayout";
import Banner from "../../components/Banner/Banner";
import Footer from "../../layout/Footer/Footer";
import imageAbout from '../../assets/imgBannerAPropos.png'
import Collapse from "../../components/Collapse/Collapse";
import './A_propos.css'

const imgAbout =  [imageAbout]

export default function Propos() {
      return (
            <MainLayout>
                  <><Banner img={imgAbout} name='aboutBanner' /></>
                  <div className="Collapses">
                  <Collapse titre={ 'Fiabilité'} description={'Les annoncnpmes postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
                  <Collapse titre={'Respect'} description={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                  <Collapse titre={'Service'} description={`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`}/>
                  <Collapse titre={'Sécurité'} description={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}/>
                  </div>
                  <Footer/>
            </MainLayout>
      );
}
