import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import About from './Pages/About'
import LayoutMain from './Layouts/LayoutMain'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import RegistrationForm from './Pages/RegistrationForm'
import ComponentD from './Context/ComponentD'
import CompomentA from './Context/CompomentA'
import Show from './Context/Show'


export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutMain/>}>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/product-details/:productId' element={<ProductDetails/>}/>

          <Route path="/show" element={<Show/>} />
        </Route>
      </Routes>
    </Router>
  )
}
