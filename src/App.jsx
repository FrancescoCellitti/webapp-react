import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleFilms from './pages/SingleFilms'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<Home />}></Route>
            <Route path='/SingleFilms' element={<SingleFilms />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
