import { getRandomFact } from "../services/facts";
import { useEffect, useState } from "react";

export function useCatFact() {
  const [fact, setFact] = useState(); // Estado para almacenar el hecho del gato

  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshRandomFact, []); //se ejecuta solo una vez al montar el componente

  return { fact, refreshRandomFact };
}
