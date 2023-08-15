function Button(props) {

  const handleClick = () => {
    const numero = Math.floor(Math.random() * (9 - 0) + 0);
    console.log("number", numero);
    props.getValue(numero);
  };

  return (
    <button onClick={handleClick}>Tendré suerte?</button>
  )
}

export default Button;