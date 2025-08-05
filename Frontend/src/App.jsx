import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import LabTests from './pages/LabTests'
import Bookings from './pages/Bookings'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tests' element={<LabTests/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
