import styles from "./Product.module.css";

function Product(props) {
    return (
        <>
            <div className={styles.card}>
                <img src={props.img} />
                <h3>{ props.titre }</h3>
                <p>{ props.price }</p>
            </div>
        </>
    )
}

export default Product;