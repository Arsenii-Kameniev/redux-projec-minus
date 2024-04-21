import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Registration } from './Pages/RegistrationMenu/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainMenu } from './Pages/MainMenu/MainMenu';
import { Card } from './Pages/CardMenu/Card';
import { Order } from './Pages/OrderMenu/Order';
import { Product } from './Pages/ProductMenu/Product';
import { OrderStatus } from './Pages/OrderStatusMenu/OrderStatus';
import { Category } from './Pages/CategoryMenu/Category';
import { WorkPlace } from './Pages/WorkPlace/WorkPlace';
import { LoginPlace } from './Pages/LoginPlace/LoginPlace';
import { AllProducts } from './app/AllProductsMenu/AllProducts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginPlace />}></Route>
          <Route path='/menu' element={<MainMenu />}></Route>
          <Route path='/workPlace' element={<WorkPlace />}></Route>
          <Route path='/reg' element={<Registration />}></Route>
          <Route path='/card' element={<Card />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/orderStat' element={<OrderStatus />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/allProducts' element={<AllProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
