import { useEffect } from "react";

export default function searchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, []);

  return <h1>Has buscado {routeParams.query}</h1>;
}
