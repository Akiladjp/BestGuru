import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route  path='/Register' element={<Register />} />
    
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
