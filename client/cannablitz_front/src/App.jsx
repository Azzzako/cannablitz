import './App.css'
import React from 'react';
import { LoginRegScreen } from './components/Login/LogRegScreen'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';



function App() {


  return (
    <React.Fragment>
     
      <Routes>
        <Route exact path='/login' element={<LoginRegScreen/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
     
    </React.Fragment>
  )
}

export default App
