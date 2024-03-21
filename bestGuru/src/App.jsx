import Login from './Component/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Component/Register/Register'


function App() {

  return (
    <>

      <BrowserRouter>
       <Routes>
        <Route exact path ='/' element={<Login/>} />
        <Route  path ='Register' element={<Register/>} />
       </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
