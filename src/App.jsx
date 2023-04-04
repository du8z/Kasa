import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import Card from './components/Card/Card'
import Footer from './layout/Footer/Footer'
export default function App(){

   

  return (
    <MainLayout>
      <Home/>
      <Card/>
      <Footer/>
    </MainLayout>
  )
}

