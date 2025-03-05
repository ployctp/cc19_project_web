import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactTastify.css';
const App = () => {


  return (
    <>
    <ToastContainer />
    <AppRoutes />
    
    </>
  )
}

export default App