import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from "react";


function App() {
  const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('/products')
        .then((r) => r.json())
        .then(setProducts);
        
    }, []);

    console.log(products)

  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} /> 
          <Route path="products/:id" element={<ProductDetails products={products}/>} />
        </Routes>
      </Router>
    
  
    
  );
}

export default App;
