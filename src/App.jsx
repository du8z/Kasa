import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu'
import Propos from './pages/A_propos/A_propos'
import Banner from './components/Banner/Banner'
import {Routes, Route} from 'react-router-dom'
function App(){
 
  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<><Home/><Banner/></>} />
      
      <Route path='/aPropos' element={ <Propos/>}/>

    
    </Routes>

    </>
  )
}

export default App