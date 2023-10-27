import { useState } from 'react'
import Cards from './components/cards'
import {Routes, Route} from 'react-router'
import './App.css'
import Detail from './components/detail'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/home' element={<Cards/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )

}

export default App
