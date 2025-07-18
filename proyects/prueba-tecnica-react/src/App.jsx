import { use, useEffect, useState } from "react";

const CAT_ENDOPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState(); // Estado para almacenar el hecho del gato
  const [imageUrl, setImageUrl] = useState(); // Estado para almacenar la URL de la imagen del gato

  // Effect para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data; // Desestructuración para obtener el hecho del gato
        setFact(fact); // Actualiza el estado con el hecho del gato
      });
  }, []); //se ejecuta solo una vez al montar el componente

  // Effect para recuperar la imagen del gato por cita nueva

  useEffect(() => {
    if (!fact) return; // Si no hay hecho, no hace nada
    const firstWord = fact.split(" ")[0]; //;<-- SI PIDE MAS DE LA PRIMER PALABRA split(' ', 3) ----    Obtiene la primera palabra del hecho

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response; // Desestructuración para obtener la URL de la imagen
        setImageUrl(url); // Actualiza el estado con la URL de la imagen
      });
  }, [fact]); // Se ejecuta cada vez que cambia el hecho del gato

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>} {/*Renderizado condicional*/}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen extraida usando la primer palabra de ${fact}`}
        />
      )}{" "}
      {/*Renderizado condicional de la imagen*/}
    </main>
  );
}
