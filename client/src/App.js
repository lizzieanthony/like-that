import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import NewProduct from './components/NewProduct';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from "react";


function App() {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(null)
    
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

    useEffect(() => {
        fetch('/products')
        .then((r) => r.json())
        .then(products => setProducts(products));
        console.log(products)
    }, []);

    console.log(products)

    const onNewUser = (newUser) => {
      setUser(newUser)
    }

    // console.log(user)
    
  return (
      <Router>
      <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} /> 
          <Route path="products/:id" element={<ProductDetails user={user} setUser={setUser} products={products}/>} />
          <Route path="/login" element={<Login setUser={setUser} />}/>
          <Route path="/signup" element={<Signup onNewUser={onNewUser} />}/>
          <Route path="/new" element={<NewProduct user={user} products={products} setProducts={setProducts} />}/>
        </Routes>
      </Router>
    
  
    
  );
}

export default App;
