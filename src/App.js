import React from 'react'
import "./index"
import Head from './Components/Header/Head'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <div className='app'>
      <Head/>
      <Home/>
    </div>
  )
}

export default App