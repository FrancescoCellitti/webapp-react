import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleFilms from './pages/SingleFilms'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/SingleFilms' element={<SingleFilms />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
