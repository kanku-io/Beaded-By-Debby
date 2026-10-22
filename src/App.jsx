import './App.css'
import Homepage from './homepage/Homepage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Shop from './Shop-page/Shop'
import ProductPage from './Components/ProductPage'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <div className="app-container">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App