import { Button, ButtonAcheter } from "./StyledButton";
import styles from "./Container.module.css";

function Container() {
  return (
    <>
      <Button>Clique ici!</Button>
      <br />
      <br />
      <Button state="danger">Acheter</Button>
      <Button state="warning">Acheter</Button>
      <Button state="success">Acheter</Button>
      {/* <button className={styles.btnStyled}>Clique ici!</button> */}
      <br />
      <br />
      <ButtonAcheter>ACHETER</ButtonAcheter>
      <button className="btn btn-danger">Danger</button>
    </>
  );
}

export default Container;
