function Saisi(props) {
  return (
    <>
      <h3>Montant en Euro</h3>
      <input onChange={function (event) {
        props.onMontantConvertir(event.target.value);
      }} />
    </>
  );
}

export default Saisi;