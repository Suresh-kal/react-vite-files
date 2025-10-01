import React from 'react'
import Header from './component/Header'
import Home from './page/Home'
import { Route, Routes ,useLocation} from 'react-router-dom'
import Challenge from './page/Challenge'
import Arogya from './page/Arogya'
import Ecopoint from './page/Ecopoint'
import About from './page/About'
import Footer from './component/Footer'



function App() {
   const location = useLocation();


  return (
    
    <>
    
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/challenge' element={<Challenge />}/>
        <Route path='/arogya' element={<Arogya/>}/>
        <Route path='/ecopoint' element={<Ecopoint/>}/>
        <Route path='/about' element={<About/>}/>
       
      </Routes>
       {location.pathname !== '/arogya' ? <Footer /> : null}


    </>
  )
}

export default App
