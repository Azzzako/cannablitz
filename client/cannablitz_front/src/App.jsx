import './App.css'
import React from 'react';
import { LoginRegScreen } from './components/Login/LogRegScreen'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { CreateProduct } from './components/createProduct/createProduct';
import {Dashboard} from './components/Dashboard/Dashboard'




function App() {
  const location = useLocation();


  return (
    <React.Fragment>
      {location.pathname !== '/login' && location.pathname !== '/dashboard' && <Navbar />}
      <Routes>
        <Route path='/login' element={<LoginRegScreen />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
