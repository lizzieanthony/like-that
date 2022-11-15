import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Login from './components/Login';
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
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} /> 
          <Route path="products/:id" element={<ProductDetails products={products}/>} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    
  
    
  );
}

export default App;
