import React, { useState } from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from './components/NavBar/NavBar';

function App() {
  const [cartCount, setCartCount] = useState(5)

  const handleCount = () => {
    setCartCount( x => x+1)
  }
  return (
    <>
      <NavBar cartCount={cartCount} title="Wonderland"/>
      <button className="btn btn-primary" onClick={handleCount}>Click</button>
      <ItemListContainer greetings="Bienvenido/a a la tienda oficial de Wonderland" />
    </>
  )
}

export default App