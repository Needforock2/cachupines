import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">      
      <NavBar />
      <ItemListContainer greeting={'Hola desde el ItemListContainer, esta es una prop enviada desde App.js'} />
    </div>
  );
}

export default App;
