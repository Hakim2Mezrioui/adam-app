import { useState } from "react";
import Product from "./Product";
import "./Product.css";
import "./Products.css";

const products = [
  { title: "pc1", price: 3000 },
  { title: "pc2", price: 2600 },
  { title: "pc3", price: 1500 },
];

function Products() {
  const [produts, setProducts] = useState(products); // const Products = products

  function onDelete(index) {
    produts.splice(index, 1);
    setProducts([...produts]);
  }


  return (
    <div className="products">
      <ul style={{display: "flex"}}>
        {produts.map(function (product, index) {
            return <Product delete={onDelete} index={index} product={product} />
        })}
      </ul>
    </div>
  );
}

export default Products;
