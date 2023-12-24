// import "./Button.css";
import styles from "./button.module.css";

function Button() {
    return (
        <>
            {/* <button className="btn">Click ici!</button> */}
            <button className={styles.btn}>Click ici!</button>
        </>
    )
}

export default Button;