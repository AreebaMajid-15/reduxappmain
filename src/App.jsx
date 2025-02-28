import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Notes from './pages/Notes'

function App() {

  return (
    <>
     < Navbar />
     <     Notes />
    </>
  )
}

export default App
