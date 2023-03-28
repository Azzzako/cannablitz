import './App.css'
import React from 'react';
import { LoginRegScreen } from './components/Login/LogRegScreen'
import { Route, Routes } from 'react-router-dom';



function App() {


  return (
    <React.Fragment>
     
      <Routes>
        <Route exact path='/login' element={<LoginRegScreen/>}/>
      </Routes>
     
    </React.Fragment>
  )
}

export default App
