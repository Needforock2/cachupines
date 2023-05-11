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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7bEHzvxJ-FWWGautL4EhhANmwBjIrAtU",
  authDomain: "ecommerce-cachupines.firebaseapp.com",
  projectId: "ecommerce-cachupines",
  storageBucket: "ecommerce-cachupines.appspot.com",
  messagingSenderId: "641415233556",
  appId: "1:641415233556:web:32d7a3cf74006715f5a701",
  measurementId: "G-FFEL75CKT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'ARTICULOS'}/>}/>
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
