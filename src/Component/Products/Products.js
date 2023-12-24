import { useState } from "react";
import { Data } from "./data.module";
import Product from "./Product";
import styles from "./Products.module.css";

function Products() {
  const [data, setData] = useState(Data);

  return (
    <>
      <h1 className="">Laptops</h1>
      <div className={styles.products}>
        {data.map(function (product) {
          return (
            <Product
              img={product.image}
              titre={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Products;
