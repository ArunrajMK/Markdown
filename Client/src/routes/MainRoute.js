import React from 'react'
import Convert from '../pages/Convert'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'


function MainRoute() {

  return (
    <>
    <NavBar/>
    <Routes>
      
      <Route path="/"  element={ <Convert/>} />
     
    </Routes>
    </>
  
  )
}

export default MainRoute
