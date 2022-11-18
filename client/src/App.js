import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
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
        .then(setProducts);
        
    }, []);

    console.log(products)

    const onNewUser = (newUser) => {
      setUser([...user, newUser])
    }
    
    // if (!user) return <Login setUser={setUser} />;

  return (
      <Router>
      <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} /> 
          <Route path="products/:id" element={<ProductDetails products={products}/>} />
          <Route path="/login" element={<Login setUser={setUser} />}/>
          <Route path="/signup" element={<Signup onNewUser={onNewUser} />}/>
        </Routes>
      </Router>
    
  
    
  );
}

export default App;
