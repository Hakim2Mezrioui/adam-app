import "./Product.css";

function Product(props) {
    console.log(props);
    return (
        <div className="prduct" style={{width: "8em", border: "1px solid", marginInline: "2em"}}>
            <h3>title: </h3>
            <p>{props.product.title}</p>
            <h3>price: </h3>
            <p>{props.product.price}</p>

            <button onClick={() => props.delete(props.index)}>delete</button>
        </div>
    )
}

export default Product;