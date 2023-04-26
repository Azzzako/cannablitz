import './App.css'
import React from 'react';
import { LoginRegScreen } from './components/Login/LogRegScreen'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Dashboard } from './components/Dashboard/Dashboard'
import { CreateProduct } from './components/Dashboard/createProduct/createProduct';
import { Users } from './components/Dashboard/Users/Users';




function App() {
  const location = useLocation();


  return (
    <React.Fragment>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/login' element={<LoginRegScreen />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/product' element={<CreateProduct />} />
        <Route path='/dashboard/userlist' element={<Users />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
