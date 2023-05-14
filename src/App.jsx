import { useState } from 'react'
import {Header,Home,Bridge, Footer} from "./components"
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/> 
      <Home/>
      <Bridge/>
      <Footer/>
    </div>
  )
}

export default App
