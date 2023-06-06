import React from 'react'
import Home from './views/Home'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import ProductList from './views/Acheter'
import Register from './RegisterForm'
import LoginForm from './LoginForm'
import Cart from './views/Cart'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/boutique' element={<ProductList />} />
        <Route path={'/connexion'} element={<LoginForm />} />
        <Route path={'/inscription'} element={<Register/>} />
        <Route path='/panier' element={<Cart />} />
      </Routes>
    </div>
  )
}
