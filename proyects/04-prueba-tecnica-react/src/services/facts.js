const CAT_ENDOPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDOPOINT_RANDOM_FACT);
    const data = await res.json();
    const { fact } = data; // Desestructuración para obtener el hecho del gato
    return fact;
};
