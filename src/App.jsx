import { useState } from 'react'

import './App.css'
  import Header from './component/Header/Header'
import Nav from './component/left/Nav'
import Overview from './component/Overview/Overview'
import Transactions from './component/Transactions/Transactions'
function App() {
 

  return (
    <>
    <div className="container flex max-w-full  ">
      <div className="left w-2/12 ">
        <Nav/>
      </div>
      <div className="right w-10/12">
      <Header/>
      <Overview/>
      <Transactions/>
      </div>
    </div>
    
    </>
  )
}

export default App
