import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu'
import Propos from './pages/A_propos/A_propos'
import Error from './pages/404/404'
import Banner from './components/Banner/Banner'
import {Routes, Route} from 'react-router-dom'


const imgHome =  ['/static/media/imgBannerHome.19221376a0aa2549c135.png' , 'Chez vous, partout et ailleurs']
const imgAbout =  ['/static/media/imgBannerAPropos.640955dab8c7bff25514.png']



function App(){


  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<><Banner img={imgHome}/></>} />
      
      <Route path='/aPropos' element={ <><Banner img={imgAbout}/></>}/>
      <Route path='/profil' element={<Error/>}/>
    
    </Routes>

    </>
  )
}

export default App