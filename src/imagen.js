import { useEffect, useState } from 'react';
import './imagen.css';

function ImagenReact(props) {

  const [estado, setEstado] = useState({});

  useEffect(() => {
    setEstado({ [props.posicion]: 1 });
  }, []); // cuando llega

  useEffect(() => {
    setEstado((prevState) => ({
      ...prevState,
      [`imagen${props.posicion}`]: prevState.hasOwnProperty(`imagen${props.posicion}`) ? prevState[`imagen${props.posicion}`]+1 : 1
    })); // {default: 1, imagen3: 1}
  }, [props]); // cuando se actualiza la dependecias
  
  const handleClick = () => {
    console.log("sucedio un click");
  };

  return (
    <div className={props.className}>
      <img className="imageInContenedor" onClick={handleClick} src={props.imagen} alt={props.texto} />
      <p>Visualizacion: {estado[`imagen${props.posicion}`]}</p>
    </div>
  )
}

export default ImagenReact;