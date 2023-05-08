import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { useContext } from 'react';
import { CartContext } from './context/cartContext';

//const isDarkMode = true

function App() {
  return (
            
      <div className="App">      
        <NavBar />
        <ItemListContainer greeting={'Articulos'} />
        <ItemDetailContainer />
      </div>  

  );
}

export default App;
