import image from "../../assets/imgBannerAPropos.png";
import Menu from "../../components/Menu/NavBar";
import MainLayout from "../../layout/MainLayout";
import Banner from "../../components/Banner/Banner";

import imageAbout from '../../assets/imgBannerAPropos.png'



const imgAbout =  [imageAbout]


export default function Propos() {
      return (
            <MainLayout>
                  <><Banner img={imgAbout}/></>
            </MainLayout>
      );
}
