import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Main className="mainCont"/>
    </div>
  )
}

export default App
