import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
