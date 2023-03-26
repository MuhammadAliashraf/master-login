import React, { useEffect } from 'react'
import AppRouter from './routing/Router'
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './Config/config';
function App() {

 

  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
