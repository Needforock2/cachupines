import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header col-12 justify-content-start">
        <div className='col-6'>
          <h1>Cachupines</h1>
        </div>
        <div className='col-6 d-flex flex-row justify-content-end align-items-center'>          
          <button className='btn btn-light'>Ropa</button>
          <button className='btn btn-light'>Accesorios</button>
          <button className='btn btn-light'>Menaje</button>
          <button className='btn btn-light'> <i className="bi bi-cart"></i> Carrito</button>
        </div>  
        
      </header>
      

    </div>
  );
}

export default App;
