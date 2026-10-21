import './App.css'
import Homepage from './homepage/Homepage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Shop from './Shop-page/Shop'

function App() {
  return (
    <div className="app-container">
      <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/shop" element={<Shop/>}/>

      </Routes>

      </BrowserRouter>
      

      
      </>
      
    </div>
  )  
}

export default App
