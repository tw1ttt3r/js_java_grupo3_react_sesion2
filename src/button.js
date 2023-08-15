import { useState } from "react";

function Button(props) {

  const [ numbers, setNumbers ] = useState([]);

  const generaNumeroAleatorio = () => Math.floor(Math.random() * (props.max - 0) + 0);

  const handleClick = () => {
    let numero = generaNumeroAleatorio();
    if (numbers.length < props.max) {
      while(numbers.includes(numero)) {
        numero = generaNumeroAleatorio();
      }
      setNumbers(prevState => [...prevState, numero]);
    }
    props.getValue(numero);
  };

  return (
    <button onClick={handleClick}>Tendré suerte?</button>
  )
}

export default Button;