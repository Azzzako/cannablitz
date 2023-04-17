import './App.css'
import React from 'react';
import { LoginRegScreen } from './components/Login/LogRegScreen'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { CreateProduct } from './components/createProduct/createProduct';




function App() {
  const location = useLocation();


  return (
    <React.Fragment>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/login' element={<LoginRegScreen />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/create-product' element={<CreateProduct/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
