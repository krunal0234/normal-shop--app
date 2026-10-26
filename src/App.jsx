
import { useState } from 'react'
import './App.css'
import data from './data.js'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound .jsx'

function App() {
  const [productData] = useState(data)
  const [cart, setcart] = useState([])

  const handlecart = (product) => {
    setcart((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      }

      return [...prev, { ...product, count: 1 }]
    })
  }

  // NEW: Calculate total quantity
  const totalItems = cart.reduce((sum, item) => {
    return sum + (item.count || 1)
  }, 0)

  return (
    <div>
      {/* CHANGED: Pass totalItems to Navbar */}
      <Navbar totalItems={totalItems} />

      <Routes>
        <Route
          path="/"
          element={
            <Products
              productData={productData}
              handleprodcut={handlecart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart cart={cart} totalItems={totalItems} />
          }
        />

        <Route
          path="*"
          element={
            <NotFound />
          }
        />

      </Routes>





    </div >
  )
}

export default App
