import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewProduct = ({products, setProducts}) => {
  const [name, setName] = useState("")  
  const [description, setDescription] = useState("")
  const [image_url, setImage_url] = useState("")
  const [price, setPrice] = useState(0)
  const [productAdded, setProductAdded] = useState(false)
  const navigate = useNavigate();

    
  const handleSubmitProduct = (e) => {
    e.preventDefault();

    const product = {
        name: name,
        description: description,
        image_url: image_url,
        price: price, 
        reviews: [],
    };
    setProductAdded(true);
    fetch("/products", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product) 
    })
    .then((r) => r.json())
    .then((newProduct) => {
        const updatedProducts = [...products, newProduct]
        setProducts(updatedProducts)
        setProductAdded('false')
        navigate(`/products/${newProduct.id}`);
    })
  }
    
    
    return ( 
        <div className="new">
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmitProduct}>
                <label>Name:</label>
                    <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <label>Description:</label>
                    <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                <label>Image url:</label>
                    <input 
                    type="text"
                    required
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                    />
                    <label>Price:</label>
                <input 
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                 <button>Add Product</button>
            </form>
        </div>  
     );
}
 
export default NewProduct;