import './App.css';
import ImagenReact from './imagen';
import { useState } from 'react';
import DataPerros from './assets/data';
import Button from './button';

function App() {

  const [estado, setEstado] = useState({
    imagen: "https://www.nationalgeographic.com.es/medio/2023/04/21/boyero-de-berna-1_10a9bb99_230421205529_800x800.jpg",
    texto: "perrito",
    posicion: "default"
  });

  const getValor = (value) => {
    setEstado({...DataPerros[value], posicion: value});
    // setEstado((prevState) => {
    //   console.log("prevState", prevState)
    //   return {...value};
    // });
  }

  return (
    <div className="App">
      <ImagenReact className="contenedorImagen" imagen={estado.imagen} texto={estado.texto} posicion={estado.posicion} />
      <Button max={DataPerros.length} getValue={getValor} />
    </div>
  );
}

export default App;
