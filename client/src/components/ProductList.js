// import {Link} from "react-router-dom";


const ProductList = ({products}) => {
    

    return (  
       <h2>
        {products.map((product) => (
            <div className="productpreview" key={product.id}>
                <h2>{product.name}</h2>
            </div>
        ))}
       </h2>
    );
}
 
export default ProductList;