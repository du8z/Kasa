import { useState, useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import imageHome from "../../assets/imgBannerHome.png";
import Banner from "../../components/Banner/Banner";
export default function Home() {
      const imgHome = [imageHome, "Chez vous, partout et ailleurs"];

      return (
            <div>
                  <Banner img={imgHome} />
            </div>
      );
}
