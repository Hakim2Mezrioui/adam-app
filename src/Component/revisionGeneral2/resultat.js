function Resultat(props) {
  return (
    <>
      <h1>= {props.montant} DH</h1>
      <button onClick={() => props.onFromChild("hello world")}>send message</button>
    </>
  );
}

export default Resultat;
