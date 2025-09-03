import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import authLayout from './components/auth/authLayout'



const App = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white ">
        <h1>Header Components</h1>
         <Routes>
         <Route path="/auth" element={<authLayout />} /> 
           <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 

        </Routes> 
      </div>
    </>
  );
}

export default App