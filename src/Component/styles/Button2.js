// import "./Button2.css";
import { useEffect, useState } from "react";
import styles from "./button2.module.css";

function Button2() {
    const [ballPosition, setBallPosition] = useState({
        top: 0,
        left: 0,
    });
    
    function top() {
        
    }

    function bottom() {
        setBallPosition(prevState => ({
            top: prevState.top + 10,
            left: prevState.left
        }));
        const ball = document.getElementById("ball");
        ball.style.top = ballPosition.top ;

    }
    function right() {

    }
    function left() {

    }

    document.addEventListener("keypress", (e) => {
        if(e.keyCode == 115) {
            setTimeout(
                bottom(),
                300
            )
        }
    })

  return (
    <>
      <div style={{ width: "100%" }}>
        {/* <button className={styles.btn}>Click ici!</button> */}
        {/* <button className={styles.btn2}>bnt2</button> */}
        {/* <p className={styles.paragraph}>Hello World</p> */}
        {/* <p className={styles.para}>
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il est
          prêt ou que la mise en page est achevée. Généralement, on utilise un
          texte en faux latin, le Lorem ipsum ou Lipsum
        </p> */}

        <div id="ball" className={styles.ball} />
        {/* <input className={styles.fc} /> */}
      </div>
    </>
  );
}

export default Button2;
