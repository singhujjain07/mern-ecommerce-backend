import Navbar from '../features/navbar/Navbar'
import React from 'react'
import ProductList from '../features/product-list/ProductList'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home