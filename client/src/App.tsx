import { useEffect, useState } from "react";

function App() {
const [products, setProducts] = useState([
  {name: 'product1', price: 100.00},
  {name: 'product2', price: 200.00},
]);

// Fetch product from API
useEffect(() => {
  fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => setProducts(data))
}, []) // [] means only called once, i.e. loaded once

function addProduct() {
  // ... spread operation peformed below for array
  setProducts(prevState => [...prevState,
          {name: 'product' + (prevState.length + 1), 
           price: (prevState.length * 100) + 100}])
}

  return (
      <div className="app">
        <h1>Re-Store</h1>
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
          
        </ul>
        <button onClick={addProduct}>Add product</button>
      </div>
  )
}

export default App
