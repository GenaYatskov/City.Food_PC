import React from 'react'
import Registration from './pages/Registration/Registration'
import Statistic from './pages/Statistic/Statistic'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path='/statistic' element={<Statistic/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App