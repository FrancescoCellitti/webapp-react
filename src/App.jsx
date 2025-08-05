import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleFilms from './pages/SingleFilms'
import NewFilm from './pages/NewFilm'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route index element={<Home />}></Route>
            <Route path='/SingleFilms/:id' element={<SingleFilms />}></Route>
            <Route path='/NewFilm/:id' element={<NewFilm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
