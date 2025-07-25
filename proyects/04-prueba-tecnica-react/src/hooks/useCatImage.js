import { useEffect, useState } from "react";

// const CAT_PREFIX_IMAGE_URL = "https://catfact.ninja";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState(); // Estado para almacenar la URL de la imagen del gato

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

  return { imageUrl }; // Retorna la URL de la imagen
}
