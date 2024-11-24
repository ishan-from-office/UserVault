import { useState } from 'react'
import './index.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
