import "./App.css";
import { useCatFact } from "./hooks/useCatFact.js";
import { useCatImage } from "./hooks/useCatImage.js";

export function App() {
  const { fact, refreshRandomFact } = useCatFact(); // Hook personalizado para obtener el hecho del gato
  const { imageUrl } = useCatImage({ fact }); // Hook personalizado para obtener la imagen del gato

  const handleClick = async () => {
    refreshRandomFact(); // Actualiza el estado con el nuevo hecho del gato
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>} {/*Renderizado condicional*/}
      {imageUrl && (<img src={imageUrl} alt={`Imagen extraida usando la primer palabra de ${fact}`}/>)}{" "}{/*Renderizado condicional de la imagen*/}

    </main>
  );
}
