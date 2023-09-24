import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Front } from './Pages/Front'
import {RentalProjectInfo } from './Pages/RentalProjectInfo'
import { GymProjectInfo } from './Pages/GymProjectInfo'

function App() {
  
  return (
    <>
    <Routes>
    <Route path='/' element={<Front />} />
    <Route path='/project/1' element={<GymProjectInfo />} />
    <Route path='/project/2' element={<RentalProjectInfo/>} />

    </Routes>
      
    </>
  )
}

export default App
