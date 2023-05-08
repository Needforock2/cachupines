import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContext } from './context/cartContext';
import { CartContextProvider } from './context/CartContextProvider';
import { CartView } from './components/CartView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos los Artículos'}/>}/>
            <Route path='/products' element={<ItemListContainer greeting={'Articulos'} />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer  />}/>
            <Route path='/products/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartView />}/>
            <Route path='/*' element={<ItemListContainer greeting={'Articulos'} />}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
