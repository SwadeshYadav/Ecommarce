import React from 'react';
import './App.css';

import Product from './Component/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Component/ProductList';




export default function App() {
  return (

    <div>
      <BrowserRouter>
     
        <Routes>
 
          <Route path='/' element={<Product />} />
          <Route path='/Product/:id' element={<ProductList />} />
       

        </Routes>
      </BrowserRouter>

    </div>

  )
}
